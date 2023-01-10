
const { Competition } = require('../models/competition.model');

module.exports.createCompetition = (request, response)=>{
    const {Question,Country1,Country2,Country3,V1,V2,V3,totalVotes}=request.body;
    Competition.create({
        Question,
        Country1,
        Country2,
        Country3,
        V1,
        V2,
        V3,
        totalVotes
    })
    .then(competition =>response.json(competition))
    .catch(err =>response.status(400).json(err));
}

module.exports.getAllCompetitions = (request, response) => {
    Competition.find({})
        .then(competitions => response.json(competitions))
        .catch(err => response.json(err))
}

module.exports.updateCompetition = (request, response) => {
    Competition.findOneAndUpdate({_id: request.params.id}, request.body, {new:true , runValidators: true} )
        .then(updateCompetition => response.json(updateCompetition))
        .catch(err => response.status(400).json(err))
}

module.exports.deleteCompetition = (request, response) => {
    Competition.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.getCompetition = (request, response) => {
    Competition.findOne({_id:request.params.id})
        .then(Competition => response.json(Competition))
        .catch(err => response.json(err))
}

module.exports.getTop = (request, response) => {
    Competition.find({}).sort({totalVotes:-1}).limit(3)
    .then(Competition => response.json(Competition))
    .catch(err => response.json(err))
}

