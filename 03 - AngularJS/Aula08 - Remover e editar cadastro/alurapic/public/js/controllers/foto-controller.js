angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';
    console.log($routeParams.fotoId);

    if ($routeParams.fotoId) {
        $http.get('/v1/fotos/' + $routeParams.fotoId)
            .success(function (foto) {
                $scope.foto = foto;
            })
            .error(function (erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto'
            });
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {

            if ($routeParams.fotoId) {

                $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                    .then(function () {
                        $scope.mensagem = 'Foto "' + $scope.foto.titulo + '" alterada com sucesso';
                    })
                    .catch(function (erro) {
                        console.log(erro);
                        $scope.mensagem = 'Erro ao editar a foto';
                    });

            } else {

                $http.post('/v1/fotos', $scope.foto)
                    .then(function () {
                        $scope.foto = foto;
                        $scope.mensagem = 'Foto inserida com sucesso!';
                    })
                    .catch(function (erro) {
                        console.log(erro);
                        $scope.mensagem = 'Houve um erro ao inserir a foto';
                    });
            }

        };
    }
});