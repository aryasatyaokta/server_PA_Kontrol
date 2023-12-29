const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionStruk3Model = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionStruk3 = mongoose.model('QuestionStruk3', questionStruk3Model);

module.exports = QuestionStruk3;
