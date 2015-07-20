// app/proposta/proposta.js

(function () {
    'use strict';
    
	var controllerId = 'votazioneCtr';
    angular.module('app').controller(controllerId, ['$scope', 'logger', '$routeParams', 'dataFactory', 'AuthenticationFactory', votazioneCtr]);

    function votazioneCtr($scope, logger, $routeParams, dataFactory, AuthenticationFactory) {
        var vm = this;
        vm.title = 'votazione';
				
        vm.params = $routeParams;
        vm.votazione = {};
        
				vm.ready = false;
				vm.response = '';
			
				vm.voto = 0;
        vm.note = '';
		
				//Metodi
        vm.setFavorevole = setFavorevole;
        vm.setContrario = setContrario;
			
				vm.sendVoto = sendVoto;
				vm.inviato = false;
			
				// Autenticated User
				vm.username = AuthenticationFactory.user || '';			
				$scope.$watch(
					function(scope) { return AuthenticationFactory.isLogged },
              function(newValue, oldValue) { 
								vm.isLogged = newValue; 
								vm.username = AuthenticationFactory.user || 'anonimo';
							}
      	);

        //ACTIVATE *****************************************
        getVotazione($routeParams.idVotazione);

        //****************************************************
        // METODI 
        //****************************************************
        function getVotazione(id) {
        	dataFactory.getVotazione(id).then(function (data) {
          	vm.votazione = data.data;
						
						// Controllo ruolo=Delegato
						dataFactory.getIngegnereRuolo(vm.username)
							.then(function(data) {
							console.dir(data);
							
							if(data.data.ruolo!=='Delegato') {
								return vm.response = 'no-delegato';
							} 
							
							//Controllo scheda di voto già presente
							dataFactory.existVotazioneScheda(vm.votazione._id, vm.username)
								.then(function(data){
								console.dir(data);
							
								if(data.data.length>0) {
									return vm.response = 'scheda-presente';
								} else {
									vm.ready = true;
								}
								
							});
							
						});
          });
        }
			
			  function setFavorevole() {
          vm.voto = 1;
        }

        function setContrario() {
          vm.voto = 2;
        }

				function sendVoto() {
					vm.inviato = true;
					
					var scheda = {};
					scheda.votazioneId = vm.votazione._id;
					scheda.username = vm.username;
					scheda.voto = vm.voto;
					if(vm.voto==2) { scheda.note = vm.note; }
					
					dataFactory.sendVotazioneScheda(vm.votazione._id, scheda)
						.then(
							function (data) { 
								return vm.response = 'scheda-registrata';
							},
							function (error) { 
								vm.inviato = false; 
								return vm.response = 'invio-errore';
							}
          );
				}
				
    }
})();