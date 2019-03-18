angular.module('meusServicos', ['ngResource']).factory('recursoFoto', function ($resource) {

    return $resource('/v1/fotos/:fotoId', null, {
        'update': {
            method: 'PUT'
        }
    });
})

    .factory('cadastroFotos', function (recursoFoto, $q) {
        
        var servico = {};

        servico.cadastrar = function(foto) {
            //retorna uma promisse
            return $q(function (resolve, reject) {
                //se existe a foto._id é alteração
                if (foto._id) {
                    recursoFoto.update({ fotoId: foto._id }, foto, function () {
                        resolve({
                            mensagem: 'foto' + foto.titulo + ' alterada com sucesso.',
                            inclusao: false
                        });
                    }, function (erro) {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível alterar a foto' + foto.titulo
                        });
                    });
                    //se não existe, é inclusão
                } else {
                    recursoFoto.save(foto, function () {
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
                            inclusao: true
                        });
                    }, function (erro) {
                        console.log(erro);
                        reject({
                            mensagem: 'Não foi possível salvar a foto'
                        });
                    });
                }
            });
        };

        return servico;
    });