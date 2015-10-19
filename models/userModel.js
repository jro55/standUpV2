var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name: String,
    userName: String,
    location: String,
    bio: String,
    facebookId: String,
    laughterPoints: Number,
    dateOfSignUp: Date,
})

var User = mongoose.model('user', userSchema)

module.exports = User