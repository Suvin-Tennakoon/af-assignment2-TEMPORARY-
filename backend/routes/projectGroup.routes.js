const express = require('express');
const router = express.Router();

const {
    addNewProjectGroup, getAllProjectGroups
} = require('../controllers/projectGroup.controller');

router.post('/add', addNewProjectGroup);
router.get('/getAll', getAllProjectGroups);
module.exports = router;
