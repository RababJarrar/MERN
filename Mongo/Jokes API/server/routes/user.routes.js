const jokeController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/jokes', jokeController.findAllJokes);
    app.get('/api/jokes/:id', jokeController.findOneJoke);
    app.put('/api/jokes/:id', jokeController.updateJoke);
    app.delete('/api/jokes/:id', jokeController.deleteJoke);
    app.post('/api/jokes', jokeController.createNewJoke);
}