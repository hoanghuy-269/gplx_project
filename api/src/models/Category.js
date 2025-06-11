const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Category', categorySchema);
