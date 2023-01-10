
//4_name_method
const CompetitionController = require('../controllers/competition.controller');
module.exports = function (app){
    app.post('/api/create/competition',CompetitionController.createCompetition);
    app.get('/api/competitions',CompetitionController.getAllCompetitions);
    app.get('/api/competition/:id',CompetitionController.getCompetition);
    app.put('/api/edit/competition/:id',CompetitionController.updateCompetition);
    app.delete('/api/delete/competition/:id',CompetitionController.deleteCompetition);
    app.get('/api/top',CompetitionController.getTop);
    
}