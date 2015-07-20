// app/network/gruppi.js

(function () {
    'use strict';
    var controllerId = 'gruppiCtr';
    angular.module('app').controller(controllerId, ['dataFactory', gruppiCtr]);

    function gruppiCtr(dataFactory) {
        var vm = this;
        vm.title = 'gruppi';
        vm.gruppi = [];

        vm.filter = null;


        //ACTIVATE *****************************************
        getNgiGruppi();


        //****************************************************
        // METODI 
        //****************************************************
        function getNgiGruppi() {
            dataFactory.getNgiGruppi().then(function (data) {
            	vm.gruppi = data.data;
            });
        }
    }
})();