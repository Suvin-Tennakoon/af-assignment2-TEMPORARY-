const express = require('express');
const router = express.Router();

const {
    addNewSubmission, getAllSubmissions
} = require('../controllers/submission.controller');

router.post('/add', addNewSubmission);
router.get('/getAll', getAllSubmissions);

module.exports = router;
