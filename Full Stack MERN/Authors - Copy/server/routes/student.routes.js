
//3
const StudentController = require('../controllers/student.controller');
module.exports = function (app){
    app.post('/api/create/student',StudentController.createStudent);
    app.get('/api/students',StudentController.getAllStudents);
    app.get('/api/student/:id',StudentController.getStudent);
    app.put('/api/edit/student/:id',StudentController.updateStudent);
    app.delete('/api/delete/student/:id',StudentController.deleteStudent);
    
}