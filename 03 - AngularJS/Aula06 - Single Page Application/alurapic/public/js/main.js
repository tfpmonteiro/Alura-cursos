angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/cadastro-de-foto.html', {
			templateUrl: 'partials/cadastro-de-foto.html'
		});

		$routeProvider.otherwise({redirectTo: '/fotos'});

	});