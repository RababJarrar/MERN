const Joke = require('../models/user.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "something went wrong", error: err }));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findById(req.params.id)
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "something went wrong", error: err }));
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(createdJoke => res.json({ joke: createdJoke }))
        .catch(err => res.json({ message: "something went wrong", error: err }));
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "something went wrong", error: err }));
}

module.exports.deleteJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: "something went wrong", error: err }));
}