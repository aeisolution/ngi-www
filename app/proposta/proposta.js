// app/proposta/proposta.js

(function () {
    'use strict';
    var controllerId = 'propostaCtr';
    angular.module('app').controller(controllerId, ['$routeParams', 'dataFactory', propostaCtr]);

    function propostaCtr($routeParams, dataFactory) {
        var vm = this;
        vm.title = 'proposta';
        vm.params = $routeParams;
        vm.proposta = {};


        //ACTIVATE *****************************************
        getProposta($routeParams.idProposta);

        //****************************************************
        // METODI 
        //****************************************************
        function getProposta(id) {
            dataFactory.getProposta(id).then(function (data) {
                vm.proposta = data.data;
            });
        }
    }
})();