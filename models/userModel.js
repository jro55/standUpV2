var mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    name: String,
    userName: String,
    location: String,
    bio: String,
    facebookId: String,
    laughterPoints: Number,
    dateOfSignUp: Date,
    nickNames: String,
    favoriteQuotes: Array,
    following: Array,
})

var User = mongoose.model('user', userSchema)

module.exports = User