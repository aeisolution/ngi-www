// app/profilo/gruppi.js

(function () {
    'use strict';
    var controllerId = 'profiloGruppiCtr';
    angular.module('app').controller(controllerId, ['common', 'bootstrap.dialog', '$modal', 'datacontext', profiloGruppiCtr]);

    function profiloGruppiCtr(common, bootDialog, $modal, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'gruppi';
        vm.gruppi = [];
        vm.gruppoCreate = {};

        vm.filter = null;

        vm.open = open;
        vm.delRecord = delRecord;

        //ACTIVATE *****************************************
        activate();

        function activate() {
            var promises = [];
            common.activateController(promises, controllerId)
                .then(function () { getNgiGruppi(); });
        }


        function delRecord(gruppo) {
            bootDialog.deleteDialog(gruppo.Nome)
                .then(function (data) {
                    datacontext.deleteNgiGruppo(gruppo.Id).then(function (data) {
                        var index = vm.gruppi.indexOf(gruppo)
                        vm.gruppi.splice(index, 1);
                    })
                });
        }

        //****************************************************
        // METODI 
        //****************************************************
        function getNgiGruppi() {
            return datacontext.getNgiGruppiUser().then(function (data) {
                return vm.gruppi = data;
            });
        }

        function createNgiGruppo(createData) {
            return datacontext.createNgiGruppo(createData)
                .then(function () { getNgiGruppi(); });
        }

        // OPEN MODAL DIALOG
        function open(size) {
            var modalInstance = $modal.open({
                templateUrl: '/app/profilo/gruppoCreateModal.html',
                controller: 'gruppoCreateModal',
                size: size,
                resolve: {
                    gruppo: function () {
                        return vm.gruppoCreate;
                    }
                }
            });

            modalInstance.result.then(function (returnItem) {
                createNgiGruppo(returnItem);
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };
    }
})();