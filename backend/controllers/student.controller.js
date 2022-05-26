
const Student = require('../models/student.model');

const signUpStudent = (req, res)=> {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const Email = req.body.Email;
    const password = req.body.password;
    const pnum = req.body.pnum;

    const newStudent = new Student({
        firstname,
        lastname,
        pnum,
        Email,
        password
    });

    newStudent.save().then((Student) => {
        res.json(Student);
    }).catch((err) => {
        res.json(err);
    })

}

const getAllStudents = (req, res) => {
    Student.find().then((Student) => {
        res.json(Student);
    }).catch((err) => {
        res.json(err);
    })
}

module.exports ={
    signUpStudent,
    getAllStudents
}