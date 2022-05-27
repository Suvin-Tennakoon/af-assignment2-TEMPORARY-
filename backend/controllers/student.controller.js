
const Student = require('../models/student.model');

const signUpStudent = (req, res)=> {
    const fullname = req.body.fullname;
    const Email = req.body.Email;
    const password = req.body.password;
    const pnum = req.body.pnum;

    const newStudent = new Student({
        fullname,
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

const deleteStudent = (req, res) => {
    Student.findByIdAndDelete(req.params.id)
        .then(() => res.json('Request Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
}

const getStudentById = (req, res) => {
    Student.findById(req.params.id)
        .then((Student) => res.json(Student))
        .catch(err => res.json(err))
}

module.exports ={
    signUpStudent,
    getAllStudents,
    deleteStudent,
    getStudentById
}