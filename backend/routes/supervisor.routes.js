const express = require('express');
const router = express.Router();

const {
    signUpSupervisor, getAllSupervisors
} = require('../controllers/supervisor.controllers');

router.post('/add', signUpSupervisor);
router.get('/getAll', getAllSupervisors);

module.exports = router;
