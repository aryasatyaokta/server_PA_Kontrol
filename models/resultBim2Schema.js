const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultBim2Model = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

const ResultBim2 = mongoose.model('ResultBim2', resultBim2Model)

module.exports = ResultBim2;