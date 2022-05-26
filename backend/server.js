const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect(
        "mongodb+srv://af_assignment2:asdfg@cluster0.5ttcv.mongodb.net/scad_db?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Mongo DB Connected");
    }).catch(err=>[
    console.log(err)
]);

const panelMemberRoutes = require('./routes/panelMember.routes');
app.use("/api/panelmember", panelMemberRoutes);

const studentRoutes = require('./routes/student.routes');
app.use("/api/student");

const supervisorRoutes = require('./routes/supervisor.routes');
app.use('api/supervisor');


app.listen(3001, () => {
    console.log("Server is Running");
});
