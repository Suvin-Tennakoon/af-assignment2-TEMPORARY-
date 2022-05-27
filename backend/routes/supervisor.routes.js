const express = require('express');
const router = express.Router();

const {
    signUpSupervisor, getAllSupervisors, deleteSupervisor, getSupervisortById, updateSupervisor, checkLoginSupervisor
} = require('../controllers/supervisor.controllers');

router.post('/add', signUpSupervisor);
router.get('/getAll', getAllSupervisors);
router.delete('/delete/:id', deleteSupervisor);
router.get('/getSupervisorById/:id', getSupervisortById);
router.put('/updateSupervisor/:id', updateSupervisor);
router.get('/checkLogin', checkLoginSupervisor);

module.exports = router;
