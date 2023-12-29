const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultStruk5Model = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

const ResultStruk5 = mongoose.model('ResultStruk5', resultStruk5Model)

module.exports = ResultStruk5;