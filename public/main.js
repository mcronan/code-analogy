var analogyApp = angular.module('analogyApp', ['ngRoute'])

analogyApp.config(function($routeProvider) {	
	$routeProvider
		.when('/', {
			templateUrl   : '/templates/search',
			controller    : 'findController'
	})
});


analogyApp.factory('findFactory', function() {
	var keywords = [];

})

analogyApp.controller('findController', function($scope) {
	console.log("I am the controller")
	$scope.keywords = [];
	$scope.analogies = [];

	$scope.addKeyword = function() {
		$scope.keywords.push($scope.newKeyword)
	}

	$scope.addAnalogy = function() {
		$scope.analogies.push($scope.newAnalogy)
		}


})

