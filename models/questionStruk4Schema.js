const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionStruk4Model = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionStruk4 = mongoose.model('QuestionStruk4', questionStruk4Model);

module.exports = QuestionStruk4;
