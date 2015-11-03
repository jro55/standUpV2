angular.module('myApp', ['ui.bootstrap', 'ngRoute'])


angular.module('myApp')
	.config(['$routeProvider', function($routeProvider){
		// No need to define #, it is assumed
		$routeProvider
			.when('/', {
				templateUrl : '/html/home.html',
				controller : 'mainController'
			})
			.when('/signup', {
				templateUrl : '/html/register.html',
				controller : 'mainController'
			})
            .when('/upcomingshows', {
                templateUrl : '/html/upcomingShows.html',
                controller : 'mainController'
            })
            .when('/userpage', {
                templateUrl : '/html/userPage.html',
                controller : 'userPageController'
            })
            .when('/hostashow', {
                templateUrl : '/html/hostashow.html',
                controller : 'mainController'  
            })
            .when('/profile/:userName', {
                templateUrl : '/html/viewProfile.html',
                controller : 'profileController'
            })
            .when('/viewshow/:host', {
                templateUrl : '/html/viewShow.html',
                controller : 'showController'
            })
            
        
			
//			.otherwise({
//				redirectTo : '/'
//			})

	}])

angular.module('myApp')
    .controller("navController", ['$scope', '$http', 'authService', function($scope, $http, authService) {
        $scope.loggedIn = false;
        authService.authCheck(function(user){
            console.log('USER!', user)
            if (user) {
                $scope.loggedIn = true;
            }
    })
        
        
        
    }])



//-=-=-=-=-=-=-=-=-=- MAINCONTROLLER -=-=-=-=-=-=-=-=-=-\\
angular.module('myApp')
    .controller("mainController", ['$scope', '$http', 'authService', '$location', function($scope, $http, authService, $location) {
        

        

	// -=-=-=-=-=- USER CONSTRUCTOR and several new test users -=-=-=-=-=-=-=-

        
	$scope.usersTest = []
	var User = function(firstName, lastName, userName, email, location) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.email = email;
		this.location = location;
		this.userSinceDate = new Date();
		this.rating = 0;
		$scope.usersTest.push(this);
	}

	var josh = new User('Josh', 'Roman', 'jro55', 'joshproman@yahoo.com', 'Colorado')
	var kevin = new User('Kevin', 'Harris', 'kheaven', 'solutions@kevinharris.com)', 'Colorado')
	var joe = new User('Joe', 'Lewis', 'buck711', 'joebuck@gmail.com', 'Texas')
	var danielle = new User('Danielle', 'Justice', 'theRealDanielle', 'daniellejs@gmail.com', 'California')
	var will = new User('Will', 'Roman', 'WAR215', 'solutions@willroman.com', 'Texas')
	var jeremy = new User('Jeremy', 'Poole', 'Turtle', 'jeremyp@gmail.com', 'Louisiana')
	var josh = new User('Josh', 'Blanchard', 'jpBaller14', 'jp@yahoo.com', 'Texas')
	var todd = new User('Todd', 'Pabst', 'taptap', 'todd@gmail.com', 'Colorado')
	var andrew = new User('Andrew', 'Roman', 'LightsCameraAction', 'andrew@gmail.com', 'Texas')
	// console.log($scope.users)


// -=-=-=-=-=-=-=- End User constructor -=-=-=-=-=-=-=-=-=-=-=-=-=

	
// -=-=-=-=-=-=-=- PERFORMANCE CONSTRUCTOR -=-=-=-=-=-=-=-=-=-


	$scope.upcomingPerformances = []

	var Performance = function(firstName, lastName, userName, date, duration, category) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.date = date;
		this.duration = duration;
		this.category = category;
		this.icon = 'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfl1/v/t1.0-9/11988229_10207324154573256_7340333197716189372_n.jpg?oh=2f728cd41a1d40ae41903338cb9212b3&oe=569C5CE6'
		$scope.upcomingPerformances.push(this);
	}

	var sat3 = new Performance('Josh', 'Roman', 'jro55', 'Saturday at 3', 5, 'Improv')
	var sat4 = new Performance('Jeremy', 'Poole', 'Turtle', 'Saturday at 4', 4, 'Politics')
	var sat5 = new Performance('Joe', 'Lewis', 'buck711', 'Saturday at 5', 2, 'Redneck Comedy')
	var sun12 = new Performance('Danielle', 'Justice', 'theRealDanielle', 'Sunday at 12', 5, 'Why I am better than you')
	var sat7 = new Performance('Kevin', 'Harris', 'kheaven', 'Saturday at 7', 4, 'Real Life')
	var sat8 = new Performance('Will', 'Roman', 'WAR215', 'Saturday at 8', 5, 'Tech')

//	console.log($scope.upcomingPerformances)

	$scope.toggleBoolean = false;
    $scope.comedySide = true
	$scope.toggleBooleanFalse = function() {
		$scope.toggleBoolean = false;
        $scope.userSide = false;
        $scope.comedySide = true;
	}
	$scope.toggleBooleanTrue = function() {
		$scope.toggleBoolean = true;
        $scope.userSide = true;
        $scope.comedySide = false;
	}

	$scope.accountInfoToggle1 = true;
	$scope.accountInfoToggleOverview = function() {
		$scope.accountInfoToggle1 = true;
		$scope.accountInfoToggle2 = false;
		$scope.accountInfoToggle3 = false;
	}
	$scope.accountInfoToggleDetails = function() {
		$scope.accountInfoToggle1 = false;
		$scope.accountInfoToggle2 = true;
		$scope.accountInfoToggle3 = false;
	}
	$scope.accountInfoToggleBasic = function() {
		$scope.accountInfoToggle1 = false;
		$scope.accountInfoToggle2 = false;
		$scope.accountInfoToggle3 = true;
	}

	$scope.funnyQuotes = [
		['BOB MONKHOUSE', "When I die, I want to go peacefully like my grandfather did in his sleep. Not yelling and screaming like the passengers in his car."],
		['ELAYNE BOOSLER', "I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three."],
		['MARK RUSSELL', "The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage."],
		['ROBERT BLOCH', "Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings."],
		['STEVE MARTIN', "First the doctor told me the good news: I was going to have a disease named after me."],
		['LANA TURNER', "A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man."],
		['DAVE BARRY', "My therapist told me the way to achieve true inner peace is to finish what I start. So far I’ve finished two bags of MMs and a chocolate cake. I feel better already."],
		['ANONYMOUS', "Some boxers believe that abstaining from sex before a bout makes them a better fighter. If that's the case, then I'm slowing becoming the greatest fighter of all time."],
	]


	$scope.randomizeFunnyQuotes = function() {
		$scope.funnyQuote = $scope.funnyQuotes[Math.floor(Math.random() * $scope.funnyQuotes.length)]
	}
	$scope.randomizeFunnyQuotes()

	$scope.image = "https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfl1/v/t1.0-9/11988229_10207324154573256_7340333197716189372_n.jpg?oh=2f728cd41a1d40ae41903338cb9212b3&oe=569C5CE6"

	$scope.comments = []

//	$scope.submitYourComment = function() {
//		$scope.comments.push("jro55: " + $scope.yourComment)
//		$scope.yourComment = ""
//	}

	$scope.signInToggle = false;
	$scope.letsSignIn = function() {
		$scope.signInToggle = !$scope.signInToggle;
	}

	$scope.laughOMeter = 0
	$scope.currentlyLaughing = false;
	$scope.laughing = function() {
		$scope.currentlyLaughing = !$scope.currentlyLaughing
		$scope.isTooManyLaughs()
	}

	$scope.clicks = []
	$scope.clickCounter = 0
	$scope.isTooManyLaughs = function() {
		$scope.clicks.push(performance.now())
		if ($scope.clickCounter <= 10) {
			$scope.laughOMeter++
			console.log($scope.clicks)
			console.log($scope.clickCounter)
		} 
		else if (($scope.clicks[$scope.clickCounter] - $scope.clicks[$scope.clickCounter - 9]) > 5000) {
			$scope.laughOMeter++
			console.log("First else")
		}
		$scope.clickCounter++
		console.log("LaughOMeter: " + $scope.laughOMeter)
	}
     
    $scope.users = []
    $http.get('/api/users')
        .then(function(returnData) {
            console.log(returnData.data)
            $scope.users = returnData.data.sort(function(a, b){
                return b.laughterPoints - a.laughterPoints
            }) 
    })
    
    $http.get('/api/getupcomingshows')
        .then(function(returnData) {
            console.log(returnData.data)
            $scope.topShows = returnData.data.sort(function(a, b){
                return b.showRating - a.showRating
            }) 
    })
    
//    var user = 
//    $http.get('/api/users/' + user)
//        .then(function(returnData) {
//            $scope.user = returnData.data
//        })
    
//    $scope.hostAShow = function() {
//        $http.get('/hostashow')
//            .then(function(returnData) {
//                console.log(returnData)
//        })
//    }
    authService.authCheck(function(user){
			console.log('USER!', user)
			$scope.currentUser = user
		})
    
// Submit show click handler
    $scope.submitShow = function() {
        $http.post('/api/shows', {newHero: $scope.newShow, host: $scope.currentUser})
            .then(function(returnData){
            console.log("New Show: ", returnData)
            $location.url('/userpage')
        })
    }
    
// Grabs the upcoming shows
    $http.get('/api/getupcomingshows')
        .then(function(returnData) {
        console.log('Upcoming shows: ', returnData)
        $scope.upcomingShows = returnData.data
    })


}])



//-=-=-=-=-=-=-=-=- userPageController -=-=-=-=-=-=-=-=-=-\\

angular.module('myApp')
    .controller("userPageController", ['$scope', '$http', 'authService', function($scope, $http, authService) {
        
        	$scope.toggleBoolean = false;
    $scope.comedySide = true
	$scope.toggleBooleanFalse = function() {
		$scope.toggleBoolean = false;
        $scope.userSide = false;
        $scope.comedySide = true;
	}
	$scope.toggleBooleanTrue = function() {
		$scope.toggleBoolean = true;
        $scope.userSide = true;
        $scope.comedySide = false;
	}

	$scope.accountInfoToggle1 = true;
	$scope.accountInfoToggleOverview = function() {
		$scope.accountInfoToggle1 = true;
		$scope.accountInfoToggle2 = false;
		$scope.accountInfoToggle3 = false;
	}
	$scope.accountInfoToggleDetails = function() {
		$scope.accountInfoToggle1 = false;
		$scope.accountInfoToggle2 = true;
		$scope.accountInfoToggle3 = false;
	}
	$scope.accountInfoToggleBasic = function() {
		$scope.accountInfoToggle1 = false;
		$scope.accountInfoToggle2 = false;
		$scope.accountInfoToggle3 = true;
	}

	$scope.funnyQuotes = [
		['BOB MONKHOUSE', "When I die, I want to go peacefully like my grandfather did in his sleep. Not yelling and screaming like the passengers in his car."],
		['ELAYNE BOOSLER', "I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three."],
		['MARK RUSSELL', "The scientific theory I like best is that the rings of Saturn are composed entirely of lost airline luggage."],
		['ROBERT BLOCH', "Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings."],
		['STEVE MARTIN', "First the doctor told me the good news: I was going to have a disease named after me."],
		['LANA TURNER', "A successful man is one who makes more money than his wife can spend. A successful woman is one who can find such a man."],
		['DAVE BARRY', "My therapist told me the way to achieve true inner peace is to finish what I start. So far I’ve finished two bags of MMs and a chocolate cake. I feel better already."],
		['ANONYMOUS', "Some boxers believe that abstaining from sex before a bout makes them a better fighter. If that's the case, then I'm slowing becoming the greatest fighter of all time."],
	]


	$scope.randomizeFunnyQuotes = function() {
		$scope.funnyQuote = $scope.funnyQuotes[Math.floor(Math.random() * $scope.funnyQuotes.length)]
	}
	$scope.randomizeFunnyQuotes()
        
        
        
    authService.authCheck(function(user){
        console.log('USER!', user)
        $scope.currentUser = user
    })
        
    $scope.editThis = false;
    $scope.letsEditThis = function() {
        $scope.editThis = !$scope.editThis
    }
        
     $scope.editUserAboutYou = function() {
         $http.post('/api/users/edituseraboutyou', $scope.currentUser)
            .then(function(returnData){
                console.log(returnData.data)
                
         })
         $scope.editThis = false;
     }
     
     $scope.editUserBasicInfo = function() {
         $http.post('/api/users/edituserbasicinfo', $scope.currentUser)
            .then(function(returnData){
                console.log(returnData.data)
         })
         $scope.editThis = false;
     }
     
     $http.get('/api/getupcomingshows')
        .then(function(returnData) {
        console.log('Upcoming shows: ', returnData)
        $scope.upcomingShows = returnData.data
    })
     
//     $http.post('/api/getyourshows', $scope.currentUser)
//        .then(function(returnData) {
//         $scope.yourShows = returnData.data
//     })
        
        
    }])




angular.module('myApp')
    .controller("profileController", ['$scope', '$http', 'authService', function($scope, $http, authService) {
        var profileName = window.location.hash.split('/')[2]
        console.log('What gets sliced: ', profileName)
		$http.get('/api/users/' + profileName)
			.then(function(returnData){
                console.log('Return data: ', returnData.data)
				$scope.userProfile = returnData.data
			})
        
        authService.authCheck(function(user){
            console.log('USER!', user)
            $scope.currentUser = user
    })
        
        
    }])




//-=-=-=-=-=-=-=-=- SHOW CONTROLLER -=-=-=-=-=-=-=-\\

angular.module('myApp')
    .controller("showController", ['$scope', '$http', 'authService', '$timeout', function($scope, $http, authService, $timeout) {
        
        
                var apiKey = 45390942;
                var sessionId = '1_MX40NTM5MDk0Mn5-MTQ0NjA1MTcwOTE5NH5SYmRwVU9rbnd5cS9lWk5ZUkVTSEFuK3N-UH4';
                var session = OT.initSession(apiKey, sessionId);
                
        
                var token = 'T1==cGFydG5lcl9pZD00NTM5MDk0MiZzaWc9OWMxMDJlZDc4N2Y0MDU1ODY1M2VmMjUzZWFkZGM2YzRlMTA0ZWQ1ZDpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTFfTVg0ME5UTTVNRGswTW41LU1UUTBOakExTVRjd09URTVOSDVTWW1Sd1ZVOXJibmQ1Y1M5bFdrNVpVa1ZUU0VGdUszTi1VSDQmY3JlYXRlX3RpbWU9MTQ0NjE1MjM3MCZub25jZT0wLjQxMDM2MTc2OTc3ODAzNzImZXhwaXJlX3RpbWU9MTQ0ODc0NDMzOCZjb25uZWN0aW9uX2RhdGE9';
        var hostName = window.location.hash.split('/')[2]
        console.log('What gets sliced: ', hostName)
		$http.get('/api/shows/' + hostName)
			.then(function(returnData){
                console.log('Return data: ', returnData.data)
				$scope.thisShow = returnData.data
                $scope.counter = returnData.data.time * 60
                
                
                console.log($scope.currentUser, $scope.thisShow.host)
   
                session.connect(token, function(error) {
                if (error) {
                    console.log(error.message);
                } else {
                    session.publish('myPublisherDiv', {height: '100%', width: '100%'});
                }
            });
        
            session.on({
                streamCreated: function(event) { 
                session.subscribe(event.stream, 'subscribersDiv', {height: "100%", width: "100%"}); 
  }
});

			})
        
        authService.authCheck(function(user){
            console.log('USER!', user)
            $scope.currentUser = user
    })
        
        
        $scope.sec = '0' + 0;
        $scope.min = 5;
        $scope.counter = $scope.min * 60;

        var stopped;
//        var audio = new Audio('ding.mp3');
        console.log(parseInt($scope.counter))


        
//        $scope.counter = 5 * 60;
//        $scope.sec = '0' + 0
//        console.log($scope.counter)

        $scope.countdown = function () {
            $scope.durationDisappear = true;
            stopped = $timeout(function () {
                console.log($scope.counter);
                $scope.counter--;
                $scope.countdown();
            }, 1000);
            $scope.min = (($scope.counter / 60) - ($scope.counter % 60 / 60))
            if ($scope.min < 10) {
                $scope.min = '0' + $scope.min
            }
            $scope.sec = $scope.counter % 60
            if ($scope.sec < 10) {
                $scope.sec = '0' + $scope.sec
            }

            if ($scope.counter == 0) {
                $timeout.cancel(stopped)
//                audio.play();
            }

        };

//        $scope.stop = function () {
//            $scope.counter = 0;
//            $scope.min = '0' + 0;
//            $scope.sec = '0' + 0;
//            $timeout.cancel(stopped);
//            $scope.durationDisappear = false;
//        }
//
//        $scope.pause = function () {
//            $timeout.cancel(stopped);
//
//        }
        
//        $scope.submitYourComment = function() {
//		$http.post('/api/show/comments', $scope.yourComment)
//            .then(function(returnData) {
//                console.log(returnData.data)
//		        $scope.yourComment = ""    
//            })
//	    }
        
        $scope.showComments = []
        $scope.viewShow = false;
//        $scope.yourComment = ''
        
        var socket = io();
         
        $scope.laughCounter = 0
        $scope.laugh = function() {
            socket.emit('laugh', $scope.thisShow._id)
        }
        socket.on('laughUpdate', function(numLaughs) {
            console.log('laughs: ', numLaughs)
            $scope.$apply( function() {
                $scope.laughCounter = numLaughs
            })
//            $scope.laughCounter = numLaughs
//            $scope.$apply()
           
        })
        
        $scope.startTheShow = function() {
            socket.emit('starttheshow', false)
        }
        socket.on('startingtheshow', function() {
            $scope.$apply( function() {
                $scope.countdown()
                $scope.viewShow = true;
            })
        })
        
        $scope.submitYourComment = function(yourComment) {
            socket.emit('addcomment', {sid: $scope.thisShow._id, comment: $scope.currentUser.userName + ": "  + yourComment})
        }
        
        socket.on('updatecomments', function(comments) {
            console.log(comments)
            $scope.$apply( function() {
                $scope.showComments.push(comments) 
            })
        })
        

}]);
        
    
 

//    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
//
//    if (navigator.getUserMedia) {
//        var video = document.getElementById("videoElement");
//        navigator.getUserMedia({video: true}, handleVideo, videoError);
//    }
//
//    function handleVideo(stream) {
//        video.src = window.URL.createObjectURL(stream);
//    }
//
//    function videoError(e) {
//        console.log(e)
//    }
//        
        
//    TOKBOX STUFF
//    var apiKey = 45390942;
//    var sessionId = '1_MX40NTM5MDk0Mn5-MTQ0NjA1MTcwOTE5NH5SYmRwVU9rbnd5cS9lWk5ZUkVTSEFuK3N-UH4';
//    var session = OT.initSession(apiKey, sessionId);
//        
//    var token = 'T1==cGFydG5lcl9pZD00NTM5MDk0MiZzaWc9OThhZDliNzhkNWFiNzg1NGZjNDc0ODU4MGQzMmZmNmM0NWZhMTVmZjpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTFfTVg0ME5UTTVNRGswTW41LU1UUTBOakExTVRjd09URTVOSDVTWW1Sd1ZVOXJibmQ1Y1M5bFdrNVpVa1ZUU0VGdUszTi1VSDQmY3JlYXRlX3RpbWU9MTQ0NjA1MTk4MCZub25jZT0wLjUyNDkzNDA5NTgyMDA0NTImZXhwaXJlX3RpbWU9MTQ0NjEzODM4MA==';
//    session.on({
//        streamCreated: function(event) { 
//            session.subscribe(event.stream, 'subscribersDiv'); 
//  }
//});
//    
//    if ($scope.currentUser === $scope.thisShow.host) {    
//    session.connect(token, function(error) {
//        if (error) {
//            console.log(error.message);
//        } else {
//            session.publish('myPublisherDiv', {width: 320, height: 240});
//        }
//    });
//    }
        
    
        
        
        
//    }])


angular.module('myApp')
	.service('authService', ['$http', '$location', function($http){
		
		this.authCheck = function(cb){
			$http.get('/api/me')
				.then( function(returnData){
					cb(returnData.data)

				})
		}
					
						
	}])








