const express = require('express');
const router = express.Router();

const {
    signUpPanelMember, getAllPanelMembers, deletePanelMember, getPanelMemberById
} = require('../controllers/panelMember.controller');

router.post('/add', signUpPanelMember);
router.get('/getAll', getAllPanelMembers);
router.delete('/delete/:id', deletePanelMember);
router.get('/getPanelMemberById/:id', getPanelMemberById);

module.exports = router;
