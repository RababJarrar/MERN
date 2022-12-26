//1
const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    Name : {
        type:String,
        require:[true, "Name must bre require"],   //save it in arrary
        minlength:[2, "Name must be at least 2"],
        },
    Position:{
        type:String,
    }
}, {timestamps:true});
module.exports.Player = mongoose.model('Player',PlayerSchema);