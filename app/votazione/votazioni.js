// app/ordine/elenco.js

(function () {
    'use strict';
    var controllerId = 'votazioniCtr';
    angular.module('app').controller(controllerId, ['dataFactory', votazioniCtr]);

    function votazioniCtr(dataFactory) {
        var vm = this;
        vm.title = 'votazioni';
        vm.votazioni = [];

        vm.filter = null;


        //ACTIVATE *****************************************
        getVotazioni();

        //****************************************************
        // METODI 
        //****************************************************
        function getVotazioni() {
            dataFactory.getVotazioni().then(function (data) {
                vm.votazioni = data.data;
								loopOpens(vm.votazioni);
            });
        }
			
				function loopOpens(votazioni) {
					votazioni.forEach(function(item){
						dataFactory.checkVotazioneOpen(item._id)
							.then(
								function(data) {
									item.open = data.data.open || false;
								}
						);					
					});
				}
    }
})();