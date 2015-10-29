var mongoose = require('mongoose')

var showSchema = mongoose.Schema({
    host            : String,
    hostRating      : Number,
    time            : String,
    duration        : String,
    topic           : String,
    showRating      : Number,
    numberOfViewers : Number,
    comments        : Array,
    userPhotoUrl    : String,
})

var Show = mongoose.model('show', showSchema)

module.exports = Show