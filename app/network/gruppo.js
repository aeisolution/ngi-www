// app/network/gruppo.js

(function () {
    'use strict';
    var controllerId = 'gruppoCtr';
    angular.module('app').controller(controllerId, ['$routeParams', 'dataFactory', gruppoCtr]);

    function gruppoCtr($routeParams, dataFactory) {
        var vm = this;
        vm.title = 'gruppo';
        vm.params = $routeParams;
        vm.gruppo = {};


        //ACTIVATE *****************************************
        getNgiGruppo($routeParams.idNgiGruppo);


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