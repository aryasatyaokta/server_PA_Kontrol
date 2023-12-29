const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultMan2Model = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

const ResultMan2 = mongoose.model('ResultMan2', resultMan2Model)

module.exports = ResultMan2;