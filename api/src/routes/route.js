// src/routes/question.route.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// GET /questions
router.get('/', questionController.getAllQuestions);

module.exports = router;
