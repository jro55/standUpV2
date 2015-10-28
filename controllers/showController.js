var Show = require('../models/showModel.js')

var createShow = function(req, res) {
    console.log(req.body)
    var newShow = new Show({
        
        host            : req.body.host.userName,
        hostRating      : 0,
        time            : req.body.newHero.time,
        duration        : req.body.newHero.duration,
        topic           : req.body.newHero.topic,
        showRating      : 0,
        numberOfViewers : 0,
        comments        : [],
    })
    
    newShow.save(function(err, doc) {
        if (err) {res.send(err)}
        res.send(doc)
    })
}

var grabShows = function(req, res) {
    Show.find({}, function(err, doc) {
        res.send(doc)
    })
}

var findShow = function(req, res) {
    console.log('findShow : ', req.params)
    Show.findOne({host: req.params.hostname}, function(err, doc) {
        console.log('Doc: ', doc)
        res.send(doc)
    })
}


module.exports = {
    createShow : createShow,
    grabShows : grabShows,
    findShow : findShow,
}