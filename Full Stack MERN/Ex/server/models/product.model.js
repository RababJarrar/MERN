
//1
const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    Name : {
        type:String,
        require:[true, "Name must bre require"],   //save it in arrary
        minlength:[3, "Name must be at least 3"],
        }
}, {timestamps:true});
module.exports.Author = mongoose.model('Author',AuthorSchema);