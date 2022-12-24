
//3
const AuthorController = require('../controllers/product.controller');
module.exports = function (app){
    app.post('/api/create/author',AuthorController.createAuthor);
    app.get('/api/authors',AuthorController.getAllAuthors);
    app.get('/api/author/:id',AuthorController.getAuthor);
    app.put('/api/edit/author/:id',AuthorController.updateAuthor);
    app.delete('/api/delete/author/:id',AuthorController.deleteAuthor);
    
}