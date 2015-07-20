// app/ingegnere/ingegnere.js

(function () {
    'use strict';
    var controllerId = 'ingegnereCtr';
    angular.module('app').controller(controllerId, ['$routeParams', 'dataFactory', ingegnereCtr]);

    function ingegnereCtr($routeParams, dataFactory) {
        var vm = this;
        vm.title = 'ingegnere';
        vm.params = $routeParams;
        vm.ingegnere = {};

        //ACTIVATE *****************************************
        getIngegnere($routeParams.idIngegnere);


        //****************************************************
        // METODI 
        //****************************************************
        function getIngegnere(id) {
            dataFactory.getIngegnere(id).then(function (data) {
                return vm.ingegnere = data.data;
            });
        }
    }
})();