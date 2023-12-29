const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultStruk3Model = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

const ResultStruk3 = mongoose.model('ResultStruk3', resultStruk3Model)

module.exports = ResultStruk3;