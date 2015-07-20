// app/ordine/elenco.js

(function () {
    'use strict';
    var controllerId = 'votazioniSidebarCtr';
    angular.module('app').controller(controllerId, ['common', '$modal', 'datacontext', votazioniSidebarCtr]);

    function votazioniSidebarCtr(common, $modal, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'votazioniSidebar';
        vm.votazioni = [];

        //ACTIVATE *****************************************
        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () { getVotazioni(); });
        }


        //****************************************************
        // METODI 
        //****************************************************
        function getVotazioni() {
            console.log("getVotazioni()");
            return datacontext.getVotazioni().then(function (data) {
                return vm.votazioni = data;
            });
        }
    }
})();