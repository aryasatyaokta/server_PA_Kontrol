const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionBimModel = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionBim = mongoose.model('QuestionBim', questionBimModel);

module.exports = QuestionBim;
