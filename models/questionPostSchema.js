const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionPostModel = new Schema({
    questions: { type: Array, default: [] },
    answer: { type: Array, default: [] },
    createdAt: { type: Date, default: Date.now }
});

const QuestionPost = mongoose.model('QuestionPost', questionPostModel);

module.exports = QuestionPost;
