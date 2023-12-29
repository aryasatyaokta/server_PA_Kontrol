const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionStrukModel = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionStruk = mongoose.model('QuestionStruk', questionStrukModel);

module.exports = QuestionStruk;
