angular.module('myApp', ['ui.bootstrap', 'ngRoute'])


angular.module('myApp')
	.config(['$routeProvider', function($routeProvider){
		// No need to define #, it is assumed
		$routeProvider
			.when('/', {
				templateUrl : '/html/home.html',
				controller : 'mainController'
			})
			.when('/profile/:heroName', {
				templateUrl : '/html/hero.html',
				controller : 'mainController'
			})
			
//			.otherwise({
//				redirectTo : '/'
//			})

	}])


angular.module('myApp')
    .controller("mainController", ['$scope', function($scope) {
        


	// -=-=-=-=-=- USER CONSTRUCTOR and several new test users -=-=-=-=-=-=-=-


	$scope.users = []
	var User = function(firstName, lastName, userName, email, location) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.userName = userName;
		this.email = email;
		this.location = location;
		this.userSinceDate = new Date();
		this.rating = 0;
		$scope.users.push(this);
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

	$scope.toggleBoolean = true;
	$scope.toggleBooleanFalse = function() {
		$scope.toggleBoolean = false;
	}
	$scope.toggleBooleanTrue = function() {
		$scope.toggleBoolean = true;
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

	$scope.submitYourComment = function() {
		$scope.comments.push("jro55: " + $scope.yourComment)
		$scope.yourComment = ""
	}

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
		// console.log("Click counter: " + $scope.clickCounter)
		// console.log("Length: " + $scope.clicks.length)
		// console.log("First var: " + $scope.clicks[$scope.clickCounter - 1])
		// console.log($scope.clicks[0])
		// console.log("Second var: " + $scope.clicks[$scope.clickCounter - 9])
		// console.log("Difference: " + $scope.clicks[$scope.clickCounter] - $scope.clicks[$scope.clickCounter - 9])
		// console.log("-=-=-=-=-=-=-=-=-=-=-=-=-")

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



}])








