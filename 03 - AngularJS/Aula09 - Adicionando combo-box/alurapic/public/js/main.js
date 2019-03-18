angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute'])
	.config(function($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider.when('/fotos', {
			templateUrl: 'partials/principal.html',
			controller: 'FotosController'
		});

		$routeProvider.when('/fotos/cadastro-de-foto', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.when('/fotos/editar-foto/:fotoId', {
			templateUrl: 'partials/foto.html',
			controller: 'FotoController'
		});

		$routeProvider.otherwise({redirectTo: '/fotos'});

	});