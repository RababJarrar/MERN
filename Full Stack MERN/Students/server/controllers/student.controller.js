
//3_name,create
const { Student } = require('../models/student.model');

module.exports.createStudent = (request, response)=>{
    const {Name,Status}=request.body;
    Student.create({
        Name,
        Status
    })
    .then(student =>response.json(student))
    .catch(err =>response.status(400).json(err));
}

module.exports.getAllStudents = (request, response) => {
    Student.find({})
        .then(students => response.json(students))
        .catch(err => response.json(err))
}

module.exports.updateStudent = (request, response) => {
    Student.findOneAndUpdate({_id: request.params.id}, request.body, {new:true , runValidators: true} )
        .then(updateStudent => response.json(updateStudent))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteStudent = (request, response) => {
    Student.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.getStudent = (request, response) => {
    Student.findOne({_id:request.params.id})
        .then(Student => response.json(Student))
        .catch(err => response.json(err))
}
