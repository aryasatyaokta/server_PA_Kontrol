const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionMan2Model = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionMan2 = mongoose.model('QuestionMan2', questionMan2Model);

module.exports = QuestionMan2;
