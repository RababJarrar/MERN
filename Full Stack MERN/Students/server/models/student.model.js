
//1
const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    Name : {
        type:String
        },
    Status : {
            type:String
            }
}, {timestamps:true});
module.exports.Student = mongoose.model('Student',StudentSchema);