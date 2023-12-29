const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultStruk4Model = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

const ResultStruk4 = mongoose.model('ResultStruk4', resultStruk4Model)

module.exports = ResultStruk4;