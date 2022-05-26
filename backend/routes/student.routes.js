const express = require('express');
const router = express.Router();

const {
    signUpStudent, getAllStudents
} = require('../controllers/student.controller');

router.post('/add', signUpStudent);
router.get('getAll', getAllStudents);

module.exports = router;
