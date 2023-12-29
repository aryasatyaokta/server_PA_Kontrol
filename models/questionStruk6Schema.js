const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionStruk6Model = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionStruk6 = mongoose.model('QuestionStruk6', questionStruk6Model);

module.exports = QuestionStruk6;
