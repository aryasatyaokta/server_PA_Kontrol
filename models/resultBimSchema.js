const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultBimModel = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

const ResultBim = mongoose.model('ResultBim', resultBimModel)

module.exports = ResultBim;