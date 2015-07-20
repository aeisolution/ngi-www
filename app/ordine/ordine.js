// app/ordine/ordine.js

(function () {
    'use strict';
    var controllerId = 'ordineCtr';
    angular.module('app').controller(controllerId, ['$routeParams', 'dataFactory', ordineCtr]);

    function ordineCtr($routeParams, dataFactory) {
        var vm = this;
        vm.title = 'ordine';
        vm.params = $routeParams;
        vm.ordine = {};


        //ACTIVATE *****************************************
      	getOrdine($routeParams.idOrdine);  
			
        //****************************************************
        // METODI 
        //****************************************************
        function getOrdine(id) {
					dataFactory.getOrdine(id).then(function(data) {
						vm.ordine = data.data;
					});
        }
    }
})();