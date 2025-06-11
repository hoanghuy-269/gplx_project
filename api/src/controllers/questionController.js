// src/controllers/question.controller.js
const Question = require('../models/Question');

exports.getAllQuestions = async (req, res) => {
    try {
        const filter = {};

        // Lọc theo categoryId 
        if (req.query.categoryId) {
            filter.categoryId = parseInt(req.query.categoryId);
        }

        // Lọc theo câu hỏi quan trọng
        if (req.query.isImportant === 'true') {
            filter.isImportant = true;
        }

        const questions = await Question.find(filter)
            .populate('categoryId', 'name');

        res.json(questions);
    } catch (err) {
        res.status(500).json({ error: 'Lỗi khi lấy danh sách câu hỏi', message: err.message });
    }
};
