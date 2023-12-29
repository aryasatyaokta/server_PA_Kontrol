const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionPost2Model = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionPost2 = mongoose.model('QuestionPost2', questionPost2Model);

module.exports = QuestionPost2;
