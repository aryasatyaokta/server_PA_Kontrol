const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultStruk6Model = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

const ResultStruk6 = mongoose.model('ResultStruk6', resultStruk6Model)

module.exports = ResultStruk6;