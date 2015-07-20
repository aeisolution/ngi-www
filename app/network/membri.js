// app/ordine/elenco.js

(function () {
    'use strict';
    var controllerId = 'membriCtr';
    angular.module('app').controller(controllerId, ['dataFactory', membriCtr]);

    function membriCtr(dataFactory) {
        var vm = this;
        vm.title = 'membri';
        vm.membri = [];

        vm.filter = null;


        //ACTIVATE *****************************************
        getNgiMembri();

        //****************************************************
        // METODI 
        //****************************************************
        function getNgiMembri() {
					dataFactory.getNgiMembri().then(function(data) {
						vm.membri = data.data;
					});
        }
    }
})();