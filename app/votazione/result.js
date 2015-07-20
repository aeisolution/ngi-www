// app/proposta/proposta.js

(function () {
    'use strict';
    
	var controllerId = 'votazioneResultCtr';
    angular.module('app').controller(controllerId, ['$scope', '$routeParams', 'dataFactory', votazioneResultCtr]);

    function votazioneResultCtr($scope, $routeParams, dataFactory) {
        var vm = this;
        vm.title = 'votazione risultati';
        vm.params = $routeParams;
        vm.votazione = {};

        $scope.labels = ["favorevoli", "contrari"];
        $scope.data = [];


        //ACTIVATE *****************************************
				getVotazioneResults($routeParams.idVotazione);
			

        //****************************************************
        // METODI 
        //****************************************************
				function getVotazioneResults(id) {
					dataFactory.getVotazioneResults(id).then(function(data) {
						vm.votazione = data.data;
						
						var numFavorevoli = countVoti(data.data.results, 1);
						var numContrari = countVoti(data.data.results, 2);
            $scope.data.push(numFavorevoli);
            $scope.data.push(numContrari);
					});
				}
			
				function countVoti(arr, value) {
					var iVoti = 0;
					for(var i=0, len=arr.length;i<len;i++) {
						if(arr[i].voto===value) iVoti++;
					}
					return iVoti;
				}
			
    }
})();