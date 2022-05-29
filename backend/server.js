const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Grid = require("gridfs-stream");

const app = express();

app.use(cors());
app.use(express.json());

let gfs;


mongoose
    .connect(
        "mongodb+srv://af_assignment2:asdfg@cluster0.5ttcv.mongodb.net/scad_db?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Mongo DB Connected");
    }).catch(err=>[
    console.log(err)
]);

const conn = mongoose.connection;
conn.once("open", function () {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection("photos");
});

const upload = require('./routes/upload.routes');
app.use("/file", upload);

app.get("/file/:filename", async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res);
    } catch (error) {
        res.send("not found");
    }
});

app.delete("/file/:filename", async (req, res) => {
    try {
        await gfs.files.deleteOne({ filename: req.params.filename });
        res.send("success");
    } catch (error) {
        console.log(error);
        res.send("An error occured.");
    }
});

const panelMemberRoutes = require('./routes/panelMember.routes');
app.use("/api/panelmember", panelMemberRoutes);

const studentRoutes = require('./routes/student.routes');
app.use("/api/student", studentRoutes);

const supervisorRoutes = require('./routes/supervisor.routes');
app.use('/api/supervisor', supervisorRoutes);

const projectGroupRoutes = require('./routes/projectGroup.routes');
app.use('/api/projectGroup', projectGroupRoutes);

app.listen(3001, () => {
    console.log("Server is Running");
});
