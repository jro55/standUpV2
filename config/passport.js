var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy
var User = require('../models/userModel.js')


passport.use(new FacebookStrategy({
        clientID: '1487932484869129',
        clientSecret: '4470fc8237698e60a96998383c899a1f',
        callbackURL: "http://local.host:3000/auth/facebook/callback",
        enableProof: false
    },
    function (accessToken, refreshToken, profile, done) {
        User.findOne({
            facebookId: profile.id
        }, function (err, user) {
            if (err) {
                return done(err, null);
            }
            if (user) {
                return done(null, user);
            }
            console.log(accessToken, refreshToken, profile, done)
            
            user = new User({
                name: profile.displayName,
                userName: profile.displayName,
                location: '',
                bio: '',
                facebookId: profile.id,
                laughterPoints: 0,
                dateOfSignUp: new Date(),
            })
            
            user.save(function(err) {
                if (err) {return done(err, null)}
                return done(null, user)
            })
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
})
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user)
    })
})



