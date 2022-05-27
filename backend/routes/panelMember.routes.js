const express = require('express');
const router = express.Router();

const {
    signUpPanelMember, getAllPanelMembers, deletePanelMember
} = require('../controllers/panelMember.controller');

router.post('/add', signUpPanelMember);
router.get('/getAll', getAllPanelMembers);
router.delete('/delete/:id', deletePanelMember);

module.exports = router;
