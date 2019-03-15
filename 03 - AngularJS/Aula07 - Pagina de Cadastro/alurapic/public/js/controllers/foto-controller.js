angular.module('alurapic').controller('FotoController', function ($scope, $http) {

    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            $http.post('v1/fotos', $scope.foto)
                .then(function () {
                    $scope.mensagem = 'Foto inserida com sucesso!';
                })
                .catch(function (erro) {
                    console.log(erro);
                    $scope.mensagem = 'Houve um erro ao inserir a foto';
                });
        };
    }
});