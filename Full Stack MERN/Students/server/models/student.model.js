
//2 _name,attribute
const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    Name : {
        type:String,
        required :[true, "Name must be require"],   //save it in arrary
        minlength:[3, "Name must be at least 3"],
        },
    Status : {
            type:String,
            }
}, {timestamps:true});
module.exports.Student = mongoose.model('Student',StudentSchema);