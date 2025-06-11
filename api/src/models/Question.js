const mongoose = require('mongoose');
require('./category');

const questionSchema = new mongoose.Schema({
    questionText: String,
    answers: [String],
    correctAnswerIndex: Number,
    categoryId: {
        type: Number,
        ref: 'Category'
    },
    isImportant: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Question', questionSchema);
