// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var passport = require('passport')
var session = require('express-session')
var cookieParser = require('cookie-parser')
var mongoose = require('mongoose')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(session({ secret: 'very secret', resave: false, saveUninitialized: false}));
app.use(methodOverride());
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost/standup')
// Routes \\
app.get('/', function(req, res){
  res.sendFile('standUpV2.html', {root: './public/html/'})
});


//app.get('/userpage/:user', function(req, res) {
//    res.sendFile('standUpV2.html', {root: './public/html/'})
//})
//
//app.get('/userpage', function(req, res){
//    res.sendFile('standUpV2.html', {root: './public/html/'})
//})
//
//app.get('/hostAShow', function(req, res) {
//    res.sendFile('standUpV2.html', {root: './public/html/'})
//})
//
//app.get('/#profile/:userName', function(req, res){ 
//    res.sendFile('standUpV2.html', {root: './public/html/'})
//})

// User Routes \\
var userCtrl = require('./controllers/userController.js')
app.get('/api/users', userCtrl.getAllUsers)

app.get('/api/users/:username', userCtrl.findUser)

app.get('/api/me', function(req, res){
	res.send(req.user)
})
app.post('/api/users/edituseraboutyou', userCtrl.updateAboutYou)
app.post('/api/users/edituserbasicinfo', userCtrl.updateBasicInfo)

var showCtrl = require('./controllers/showController.js')
app.post('/api/shows', showCtrl.createShow)
app.get('/api/getupcomingshows', showCtrl.grabShows)
app.get('/api/shows/:hostname', showCtrl.findShow)
app.post('/api/show/comments', showCtrl.addComment)
//app.post('/api/getyourshows', showCtrl.getMyShows)



require('./config/passport.js')

// could put in a authentication controller
// sent here when submitting log in info
app.get('/auth/facebook',
  passport.authenticate('facebook'),
  function(req, res){
  });
// what facebook sends back
app.get('/auth/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/#');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// Creating Server and Listening for Connections \\
//var port = 3000
//app.listen(port, function(){
//  console.log('Server running on port ' + port);
//
//})

app.server = app.listen(3000)

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}

var Show = require('./models/showModel.js')
var io = require("socket.io")
var socketServer = io(app.server)

socketServer.on("connection", function(socket){
    console.log('someone connected!')  
    
//    socket.join('super cool room')
//
//    socket.on('myAwesomeCustomEvent', function(data){
//        console.log(data)
//        socketServer.emit('myAwesomeCustomEvent', data) // sends message to everyone
//        socketServer.to('super cool room').emit('myAwesomeCustomEvent', data)
//    })
//
//
//    socket.on('disconnect', function(){
//        console.log('someone disconnected')
//    })
    
    socket.on('laugh', function(sid) {
        console.log('sid : ', sid)
        Show.update({_id: sid}, {$inc: {showRating: 1}}, function(err, doc) {
            Show.findOne({_id: sid}, function(err, doc) {
                socketServer.emit('laughUpdate', doc.showRating)
            })
        })
    })
    
    socket.on('starttheshow', function() {
        socketServer.emit('startingtheshow', false)
    })
    
    socket.on('addcomment', function(data) {
        Show.update({_id: data.sid}, {$push: {comments: data.comment}}, function(err, doc) {
//            Show.findOne({_id: sid}, function(err, doc) {
//                socketServer.emit('updatecomments', doc.comments)
//            })
            socketServer.emit('updatecomments', data.comment)
        })
        
    })
    
    



})









// App ID and App Secret for Facebook Log in
//1487932484869129 
//4470fc8237698e60a96998383c899a1f 