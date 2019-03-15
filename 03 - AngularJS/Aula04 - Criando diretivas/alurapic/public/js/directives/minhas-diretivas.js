angular.module('minhasDiretivas', [])
    .directive('meuPainel', function() {

        var ddo = {};

        ddo.restrict = 'AE';
        ddo.transclude = true;
        ddo.scope = {
            titulo: '@'
        };

        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
});

angular.module('minhasDiretivas',)
    .directive('meuTexto', function() {

        var ddo = {};

        ddo.restrict = 'AE';
        ddo.transclude = true;

        ddo.template = '<h3 class="text-center" collor = "red"></h3>';

        return ddo;
});