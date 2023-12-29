const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultManModel = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

const ResultMan = mongoose.model('ResultMan', resultManModel)

module.exports = ResultMan;