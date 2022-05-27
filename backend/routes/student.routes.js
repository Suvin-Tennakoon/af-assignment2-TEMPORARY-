const express = require('express');
const router = express.Router();

const {
    signUpStudent, getAllStudents, deleteStudent
} = require('../controllers/student.controller');

router.post('/add', signUpStudent);
router.get('getAll', getAllStudents);
router.delete('/delete/:id', deleteStudent);

module.exports = router;
