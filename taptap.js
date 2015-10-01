angular.module("taptap", [])

angular.module("taptap").controller("taptapMaincontroller", ["$scope", function($scope) {
$scope.signUpForm = true
$scope.signIn = function(){
	$scope.signInForm = true
	$scope.signUpForm = false
}

$scope.signUp = function(){
	$scope.signInForm = false
	$scope.signUpForm = true
}




	
}]);