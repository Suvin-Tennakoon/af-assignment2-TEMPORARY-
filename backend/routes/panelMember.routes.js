const express = require('express');
const router = express.Router();

const {
    signUpPanelMember, getAllPanelMembers
} = require('../controllers/panelMember.controller');

router.post('/add', signUpPanelMember);
router.get('/getAll', getAllPanelMembers);

module.exports = router;
