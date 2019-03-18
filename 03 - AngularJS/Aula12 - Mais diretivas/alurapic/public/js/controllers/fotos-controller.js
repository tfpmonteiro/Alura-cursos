angular.module('alurapic').controller('FotosController', function ($scope, recursoFoto) {

    //Obtendo as fotos do back-end, através do $http; 
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    //listar fotos - principal.html
    recursoFoto.query(function (fotos) {
        $scope.fotos = fotos;
    }, function (erro) {
        console.log(erro);
    });

    //remover fotos - principal.html
    $scope.remover = function (foto) {
        recursoFoto.delete({ fotoId: foto._id }, function () {
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto' + foto.titulo + ' removida com sucesso!';
        }, function (erro) {
            console.log(erro);
            $scope.mensagem = 'Erro ao excluir a imagem ' + foto.titulo;
        });
    };
});