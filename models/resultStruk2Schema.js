const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultStruk2Model = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

const ResultStruk2 = mongoose.model('ResultStruk2', resultStruk2Model)

module.exports = ResultStruk2;