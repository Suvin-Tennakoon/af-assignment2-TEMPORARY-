const express = require('express');
const router = express.Router();

const {
    signUpSupervisor, getAllSupervisors, deleteSupervisor, getSupervisortById, updateSupervisor
} = require('../controllers/supervisor.controllers');

router.post('/add', signUpSupervisor);
router.get('/getAll', getAllSupervisors);
router.delete('/delete/:id', deleteSupervisor);
router.get('/getSupervisorById/:id', getSupervisortById);
router.put('/updateSupervisor/:id', updateSupervisor);

module.exports = router;
