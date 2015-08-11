var analogyApp = angular.module('analogyApp', ['ngResource','ngRoute'])

analogyApp.config(function($routeProvider) {	
	$routeProvider
		.when('/', {
			templateUrl   : '/templates/search',
			controller    : 'findController'
	})
});


analogyApp.factory('findFactory', function($resource) {

	// new resource model
	var model = $resource('/api/analogies')

	return {
		// get all the analogies
		// sends a GET request

		// exposing the model to the db
		model     : model,
		// this creates a collection
		analogies : model.query()
	}
})

analogyApp.controller('findController', function($scope, findFactory) {
	console.log("I am the controller")

	// analogies return from findFactory.analogies
	$scope.analogies = findFactory.analogies;

	$scope.addAnalogy = function() {


		// create a new instance of resource model 
		var newAnalogyModel = new findFactory.model(this.newAnalogy);

		// POSTS to /api/analogies & uses newAnalogyModel to
		// create a document in database

		newAnalogyModel.$save(function(data) {

			findFactory.analogies.push(data)
		})


		this.newAnalogy = {};

	}
})

