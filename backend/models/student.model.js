const mongoose = require('mongoose');
const cors = require('cors');

const { Schema }= mongoose;

const newStudentSchema = new Schema({
    firstname: String,
    lastname: String,
    pnum: String,
    Email: String,
    password: String
});

const Student = mongoose.model("Student", newStudentSchema);

module.exports = Student;