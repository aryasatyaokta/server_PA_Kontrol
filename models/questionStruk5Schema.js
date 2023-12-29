const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionStruk5Model = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionStruk5 = mongoose.model('QuestionStruk5', questionStruk5Model);

module.exports = QuestionStruk5;
