
//2 _name,attribute
const mongoose = require('mongoose');
const CompetitionSchema = new mongoose.Schema({
    Question : {
        type:String,
        required :[true, "Question must be require"],   //save it in arrary
        minlength:[10, "The question must be 10 characters or more"],
        },
    Country1 : {
            type:String,
            required :[true, "Country1 must be require"],  
            },
        V1 :{
                type:Number,
                mini:0
        },
    Country2 : {
            type:String,
            required :[true, "Country2 must be require"],  
            },
        V2 :{
                type:Number,
                mini:0
        },
    Country3 : {
            type:String, 
            },
    V3 :{
                type:Number,
                mini:0
        },
    totalVotes: {
        type: Number,
        default: 0
 }
}, {timestamps:true});
module.exports.Competition = mongoose.model('Competition',CompetitionSchema);