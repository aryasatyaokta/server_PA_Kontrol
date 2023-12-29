const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionModel = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const Question = mongoose.model('Questions', questionModel);

module.exports = Question;
