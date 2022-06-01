const express = require('express');
const router = express.Router();

const {
    addNewMarkingScheme, getAllMarkingSchemes
} = require('../controllers/markingSchema.controller');

router.post('/add', addNewMarkingScheme);
router.get('/getAll', getAllMarkingSchemes);

module.exports = router;
