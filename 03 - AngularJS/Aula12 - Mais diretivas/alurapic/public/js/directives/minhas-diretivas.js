angular.module('minhasDiretivas', ['meusServicos'])
	.directive('meuPainel', function() {

		var ddo = {};
		ddo.restrict = "AE";
        ddo.transclude = true;
		ddo.scope = {
            titulo: '@'
        };
        ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;
	})
    .directive('minhaFoto', function() {

        var ddo = {};
        ddo.restrict = "AE";
        ddo.scope = {
            titulo: '@',
            url: '@'
        };
        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           

        return ddo;

    })

    .directive('meuBotaoPerigo', function(){

        var ddo = {};
        ddo.restrict="AE";
        ddo.scope = {
            nome: '@',
            acao: '&'
        };
        ddo.template = '<button ng-click="acao()" class="btn btn-danger btn-block">{{nome}}</button>';
        
        return ddo;
    })

    .directive('meuFocus', function(){

        var ddo = {};
        ddo.restrict = "A";

        /*Usado apenas na opção 1. Aí tem que lembrar de setar a propriedade no html do botão
        ddo.scope = {
            focado: "="
        };
        */

        ddo.link = function(scope, element){
            
            /* Opção 1: implementando o watch na diretiva
            scope.$watch('focado', function(){
                if(scope.focado){
                    element[0].focus();
                    $scope.focado = false;
                }
            */
           scope.$on('fotoCadastrada', function(){
                element[0].focus();       
           });

        };

        return ddo;
    })

    .directive('meusTitulos', function(){
        var ddo = [];
        ddo.restrict = "E";
        ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
        ddo.controller = function($scope, recursoFoto){
            recursoFoto.query(function(fotos){
                $scope.titulos = fotos.map(function(foto){
                    return foto.titulo;
                });
            })
        };
        
        return ddo;
    })
