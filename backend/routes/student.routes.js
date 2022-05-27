const express = require('express');
const router = express.Router();

const {
    signUpStudent, getAllStudents, deleteStudent, getStudentById
} = require('../controllers/student.controller');

router.post('/add', signUpStudent);
router.get('/getAll', getAllStudents);
router.delete('/delete/:id', deleteStudent);
router.get('/getById/:id', getStudentById);

module.exports = router;
