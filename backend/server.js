const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//middleware (cors mw and 2nd is to parse json)
app.use(cors());
app.use(express.json());

//stablish mongodb connection by this method
//as 1st parameter we have to pass our mongodb link
mongoose
    .connect(
        "mongodb+srv://af_assignment2:asdfg@cluster0.5ttcv.mongodb.net/scad_db?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Mongo DB Connected");
    }).catch(err=>[
    console.log(err)
]);

//http://localhost:3001/api/Customer
//if someone give above url it will point to the below 2nd parameter(routes file)
// const routes = require("./routes/customer.routes");
// app.use("/api/Customer", routes);


//pass that as 1st param
//2nd para is a function, it displays msg in console if server goo
app.listen(3001, () => {
    console.log("Server is Running");
});
