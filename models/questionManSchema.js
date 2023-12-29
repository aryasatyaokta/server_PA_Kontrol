const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionManModel = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionMan = mongoose.model('QuestionMan', questionManModel);

module.exports = QuestionMan;
