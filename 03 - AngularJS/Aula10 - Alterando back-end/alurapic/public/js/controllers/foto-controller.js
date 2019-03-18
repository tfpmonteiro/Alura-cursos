angular.module('alurapic').controller('FotoController', function ($scope, recursoFoto, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    //verifica se é alteração ou inclusão
    if ($routeParams.fotoId) {
        recursoFoto.get({ fotoId: $routeParams.fotoId }, function (foto) {
            $scope.foto = foto;
        }, function (erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto'
        });
    }
    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            if ($routeParams.fotoId) {
                recursoFoto.update({ fotoId: $scope.foto._id },
                    $scope.foto, function () {
                        $scope.formulario.$setPristine();
                        $scope.mensagem = 'Foto "' + $scope.foto.titulo + '" alterada com sucesso';
                    }, function (erro) {
                        console.log(erro);
                        $scope.mensagem = 'Erro ao editar a foto';
                    });

            } else {
                recursoFoto.save($scope.foto, function () {
                    $scope.foto = {};
                    $scope.formulario.$setPristine();
                    $scope.mensagem = 'Foto inserida com sucesso!';
                }, function (erro) {
                    console.log(erro);
                    $scope.mensagem = 'Houve um erro ao inserir a foto';
                });

            };
        };
    };
});