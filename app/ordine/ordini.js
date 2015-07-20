// app/ordine/ordini.js

(function () {
    'use strict';
    var controllerId = 'ordiniCtr';
    angular.module('app').controller(controllerId, ['dataFactory', ordiniCtr]);

    function ordiniCtr(dataFactory) {
        var vm = this;
        vm.title = 'ordini';
        vm.ordini = [];

        vm.filter = null;


        //ACTIVATE *****************************************
				getOrdini();

        //****************************************************
        // METODI 
        //****************************************************
        function getOrdini() {
					dataFactory.getOrdini().then(function(data) {
						vm.ordini = data.data;
					});
        }
    }
})();