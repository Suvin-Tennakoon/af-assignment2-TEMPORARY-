const express = require('express');
const router = express.Router();

const {
    addNewProjectGroup
} = require('../controllers/projectGroup.controller');

router.post('/add', addNewProjectGroup);

module.exports = router;
