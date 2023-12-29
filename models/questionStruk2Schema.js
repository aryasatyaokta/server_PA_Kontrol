const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionStruk2Model = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionStruk2 = mongoose.model('QuestionStruk2', questionStruk2Model);

module.exports = QuestionStruk2;
