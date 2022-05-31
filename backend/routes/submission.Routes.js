const express = require('express');
const router = express.Router();

const {
    addNewSubmission
} = require('../controllers/submission.controller');

router.post('/add', addNewSubmission);

module.exports = router;
