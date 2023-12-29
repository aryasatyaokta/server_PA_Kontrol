const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultPost2Model = new Schema({
    username : { type : String },
    result : { type : Array, default : []},
    attempts : { type : Number, default : 0},
    points : { type : Number, default : 0},
    achived : { type : String, default : ''},
    createdAt : { type : Date, default : Date.now}
})

const ResultPost2 = mongoose.model('ResultPost2', resultPost2Model)

module.exports = ResultPost2;