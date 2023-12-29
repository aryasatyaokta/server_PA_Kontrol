const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionBim2Model = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionBim2 = mongoose.model('QuestionBim2', questionBim2Model);

module.exports = QuestionBim2;
