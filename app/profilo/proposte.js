// app/profilo/gruppi.js

(function () {
    'use strict';
    var controllerId = 'profiloProposteCtr';
    angular.module('app').controller(controllerId, ['common', 'bootstrap.dialog', '$modal', 'datacontext', profiloProposteCtr]);

    function profiloProposteCtr(common, bootDialog, $modal, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'proposte';
        vm.proposte = [];
        vm.propostaCreate = {};

        vm.filter = null;

        vm.open = open;
        vm.delRecord = delRecord;

        //ACTIVATE *****************************************
        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () { getProposte(); });
        }


        function delRecord(proposta) {
            console.log("delRecord: %d", proposta.Id);
            bootDialog.deleteDialog(proposta.Titolo)
                .then(function (data) {
                    datacontext.deleteProposta(proposta.Id).then(function (data) {
                        var index = vm.proposte.indexOf(proposta)
                        vm.proposte.splice(index, 1);
                    })
                });
        }

        //****************************************************
        // METODI 
        //****************************************************
        function getProposte() {
            return datacontext.getProposteUser().then(function (data) {
                return vm.proposte = data;
            });
        }

        function createProposta(createData) {
            return datacontext.createProposta(createData)
                .then(function () { getProposte(); });
        }

        // OPEN MODAL DIALOG
        function open(size) {
            var modalInstance = $modal.open({
                templateUrl: '/app/profilo/propostaCreateModal.html',
                controller: 'propostaCreateModal',
                size: size,
                resolve: {
                    gruppo: function () {
                        return vm.propostaCreate;
                    }
                }
            });

            modalInstance.result.then(function (returnItem) {
                createProposta(returnItem);
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };
    }
})();