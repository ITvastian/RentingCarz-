require('dotenv').config();

const express = require('express');
const { getCompetitions } = require('./controllers/footballController');

const router = express.Router();

router.get('/competitions', getCompetitions);


module.exports = router;
