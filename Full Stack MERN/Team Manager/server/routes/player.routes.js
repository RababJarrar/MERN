//3
const PlayerController = require('../controllers/player.controller');
module.exports = function (app){
    app.post('/api/create/player',PlayerController.createPlayer);
    app.get('/api/players',PlayerController.getAllPlayers);
    app.get('/api/player/:id',PlayerController.getPlayer);
    app.put('/api/edit/player/:id',PlayerController.updatePlayer);
    app.delete('/api/delete/player/:id',PlayerController.deletePlayer);
    
}