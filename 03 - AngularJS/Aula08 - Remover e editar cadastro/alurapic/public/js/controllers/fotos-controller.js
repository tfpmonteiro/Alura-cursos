angular.module('alurapic').controller('FotosController', function($scope, $http) {

    //Obtendo as fotos do back-end, através do $http; 
     $scope.fotos = [];
     $scope.filtro = '';
     $scope.mensagem = '';
 
     $http.get('v1/fotos')
     .then(function(retorno){
         $scope.fotos = retorno.data;
     })
     .catch(function(erro){
         console.log(erro);
     });

     $scope.remover = function(foto) {
        $http.delete('v1/fotos/' + foto._id)
        .then(function() {
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = 'Foto "' + foto.titulo + '" excluída com sucesso!';
        })
        .catch(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Erro ao excluir a foto "' + foto.titulo + '"';
        });
     }
 });