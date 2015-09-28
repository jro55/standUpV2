angular.module('myApp', ['ui.bootstrap'])

var mainController = function($scope) {

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

	console.log($scope.upcomingPerformances)


}

angular.module('myApp').controller("mainController", ['$scope', mainController])