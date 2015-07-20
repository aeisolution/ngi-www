// app/ordine/elenco.js

(function () {
    'use strict';
    var controllerId = 'proposteCtr';
    angular.module('app').controller(controllerId, ['dataFactory', proposteCtr]);

    function proposteCtr(dataFactory) {
        var vm = this;
        vm.title = 'proposte';
        vm.proposte = [];

        vm.filter = null;


        //ACTIVATE *****************************************
        getProposte();

        //****************************************************
        // METODI 
        //****************************************************
        function getProposte() {
					dataFactory.getProposte().then(function (data) {
						vm.proposte = data.data;
					});
        }
    }
})();