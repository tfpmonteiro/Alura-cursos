angular.module('alurapic').controller('FotosController', function($scope, $http) {

    //Obtendo as fotos do back-end, através do $http; 
     $scope.fotos = [];
 
     $http.get('v1/fotos')
     .then(function(retorno){
         $scope.fotos = retorno.data;
     })
     .catch(function(erro){
         console.log(erro);
     });
 });