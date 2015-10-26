var User = require('../models/userModel.js')

var getAllUsers = function(req, res) {
    User.find({}, function(err, docs) {
        res.send(docs)
    })
}

var updateAboutYou = function(req, res) {
    console.log(req.body.userName)
    User.update({name: req.body.name}, {$set: {bio: req.body.bio, favoriteQuote: req.body.favoriteQuote}}, function(err, docs) {
        console.log('docs: ', docs)
        res.send(docs)
    })
}

var updateBasicInfo = function(req, res) {
    User.update({name: req.body.name}, {$set: {userName: req.body.userName, email: req.body.email, location: req.body.location, gender: req.body.gender, age: req.body.age}}, function(err, docs) {
        console.log(docs)
        res.send(docs)
    })
}

module.exports = {
    getAllUsers : getAllUsers,
    updateAboutYou : updateAboutYou,
    updateBasicInfo : updateBasicInfo,
}