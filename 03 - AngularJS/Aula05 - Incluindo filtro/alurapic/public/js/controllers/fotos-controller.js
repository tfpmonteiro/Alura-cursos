angular.module('alurapic').controller('FotosController', function($scope, $http) {

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
});