angular.module('alurapic').controller('FotosController', function($scope, $http) {

   /* 
   //criando um array de fotos direto no controller (não precisa do $http ^) 
    $scope.fotos = [
        {
            titulo: 'Theòs Sistemas Eclesiais',
            url: 'https://bit.ly/2JmdQfU'
        },
        {
            titulo: 'SGCP Paróquia',
            url: 'https://bit.ly/2CkkihD'
        },
        {
            titulo: 'SGCP Contábil',
            url: 'https://bit.ly/2HtMu5f'
        },               
    ]
------------------------------------------
    Pegando as fotos do back-end utilizando atalhos do angularJS  (essa forma esta depreciada)

    $scope.fotos = [];

    $http.get('v1/fotos')
    .sucess(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro){
        console.log(erro);
    }) 
    ------------------------------------------
    Pegando as fotos do back-end */

    $scope.fotos = [];

    $http.get('v1/fotos')
    .then(function(retorno) {
        $scope.fotos = retorno.data;
    })
    .catch(function(erro) {
        console.log(erro);
    });
});