(function () {
    'use strict';

    var app = angular.module('app');

		app.config(function($routeProvider, $httpProvider) {
		
			$httpProvider.interceptors.push('TokenInterceptor');
			
			$routeProvider
				.when('/login', {
					templateUrl: 'partials/login.html',
					controller: 'LoginCtrl',
					access: {
						requiredLogin: false
					}
				// Account *****************************************
				}).when('/password/dimenticata', {
					templateUrl: '/app/account/pwdDimenticata.html',
					controller: 'pwdDimenticataCtr',
					access: {
						requiredLogin: false
					}
				}).when('/reset/:username/:pec/:token', {
					templateUrl: '/app/account/reset.html',
					//controller: 'pwdDimenticataCtr',
					access: {
						requiredLogin: false
					}
				}).when('/account/cambioPassword', {
					templateUrl: '/app/account/cambioPassword.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}
				// DashBoard *****************************************
				}).when('/dashboard', {
					templateUrl: '/app/dashboard/dashboard.html',
					access: {
						requiredLogin: true
					}
				}).when('/privacy', {
					templateUrl: '/app/dashboard/privacy.html',
					access: {
						requiredLogin: true
					}
				// Ingegnere *****************************************
				}).when('/ingegnere/:idIngegnere', {
					templateUrl: '/app/ingegnere/ingegnere.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}
				// NGI Membro ****************************************
				}).when('/ngi/componente', {
					templateUrl: '/app/network/membri.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}				
				// NGI Officine **************************************
				}).when('/ngi/officina', {
					templateUrl: '/app/network/gruppi.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}				
				}).when('/ngi/officina/:idNgiGruppo', {
					templateUrl: '/app/network/gruppo.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}				
				// Ordini Provinciali ********************************
				}).when('/ordine', {
					templateUrl: '/app/ordine/ordini.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}
				}).when('/ordine/:idOrdine', {
					templateUrl: '/app/ordine/ordine.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}				
				// Profilo - Officine e Proposte ********************
				}).when('/profilo/officina', {
					templateUrl: '/app/profilo/gruppi.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}
				}).when('/profilo/officina/:idNgiGruppo', {
					templateUrl: '/app/profilo/gruppo.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}	
				}).when('/profilo/proposta', {
					templateUrl: '/app/profilo/proposte.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}	
				// Proposte *****************************************
				}).when('/profilo/utente', {
					templateUrl: '/app/profilo/utente.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}
				// Proposte *****************************************
				}).when('/proposta', {
					templateUrl: '/app/proposta/proposte.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}
				}).when('/proposta/:idProposta', {
					templateUrl: '/app/proposta/proposta.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}	
				// Votazione ***************************************
				}).when('/votazione', {
					templateUrl: '/app/votazione/votazioni.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}
				}).when('/votazione/:idVotazione', {
					templateUrl: '/app/votazione/votazione.html',
					//controller: 'ordiniCtr',
					access: {
						requiredLogin: true
					}					
				}).when('/votazione/result/:idVotazione', {
					templateUrl: '/app/votazione/result.html',
					//controller: 'Page1Ctrl',
					access: {
						requiredLogin: true
					}
				}).otherwise({
					redirectTo: '/login'
				});			

				
		});

})();