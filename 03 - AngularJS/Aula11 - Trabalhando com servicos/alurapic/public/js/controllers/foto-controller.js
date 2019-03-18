angular.module('alurapic').controller('FotoController', function ($scope, recursoFoto, cadastroFotos, $routeParams) {

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

           cadastroFotos.cadastrar($scope.foto)
           .then(function(dados){
               $scope.mensagem = dados.mensagem;

               if(dados.inclusao) $scope.foto = {};
                
               $scope.formulario.$setPristine();
           })
           .catch(function(dados){
            $scope.mensagem = dados.mensagem;
           });
        };
    };
});