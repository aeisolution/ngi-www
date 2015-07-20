// app/ordine/ordine.js

(function () {
    'use strict';
    var controllerId = 'profiloGruppoCtr';
    angular.module('app').controller(controllerId, ['common', '$routeParams', '$modal', 'dataFactory', profiloGruppoCtr]);

    function profiloGruppoCtr(common, $routeParams, $modal, dataFactory) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'gruppo';
        vm.params = $routeParams;
        vm.gruppo = {};




        //ACTIVATE *****************************************
        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () {
                    getNgiGruppo($routeParams.idNgiGruppo);
                });
        }


        //****************************************************
        // METODI 
        //****************************************************
        function getNgiGruppo(id) {
            dataFactory.getNgiGruppo(id).then(function (data) {
            	vm.gruppo = data.data;
            });
        }
    }
})();