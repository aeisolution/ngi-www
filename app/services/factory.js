(function () {
  'use strict';

  var app = angular.module('app');
	
	app.factory('dataFactory', function($http) {
		var urlBase = 'http://api.network-giovani.net/api/v1';
		//var urlBase = 'http://127.0.0.1:3000/api/v1';
		var _Factory = {};

		// --- ACCOUNT -----
		_Factory.changePassword = function(obj) {
			return $http.post(urlBase + '/user/changePwd', obj);
		}; 

		// --- Ingegnere = NGI Membro -----
		_Factory.getIngegnere = function(id) {
			return $http.get(urlBase + '/ngi/membri/' + id);
		}; 
		
		_Factory.getIngegnereRuolo = function(username) {
			return $http.get(urlBase + '/ngi/membri/' + username + '/ruolo');
		}; 
		
		// --- NGI Membri -----
		_Factory.getNgiMembri = function() {
			return $http.get(urlBase + '/ngi/membri');
		}; 

		// --- NGI Gruppi -----
		_Factory.getNgiGruppi = function() {
			return $http.get(urlBase + '/ngi/gruppi');
		}; 

		_Factory.getNgiGruppo = function(id) {
			return $http.get(urlBase + '/ngi/gruppi/' + id);
		}; 

		// --- ORDINI -----
		_Factory.getOrdini = function() {
			return $http.get(urlBase + '/ordini');
		}; 

		_Factory.getOrdine = function(id) {
			return $http.get(urlBase + '/ordini/' + id);
		}; 

		// --- PROFILO -----
		_Factory.getProfiloUtente = function(username) {
			return $http.get(urlBase + '/profilo/' + username);
		}; 
		
		_Factory.updateProfiloUtente = function(username, obj) {
			return $http.post(urlBase + '/profilo/' + username, obj);
		}; 
		
		// --- PROPOSTE -----
		_Factory.getProposte = function() {
			return $http.get(urlBase + '/proposte');
		}; 

		_Factory.getProposta = function(id) {
			return $http.get(urlBase + '/proposte/' + id);
		}; 

		// --- VOTAZIONI -----
		_Factory.getVotazioni = function() {
			return $http.get(urlBase + '/votazioni');
		}; 

		_Factory.getVotazione = function(id) {
			return $http.get(urlBase + '/votazioni/' + id);
		}; 

		_Factory.checkVotazioneCompleted = function(id) {
			return $http.get(urlBase + '/votazioni/' + id + '/competed');
		}; 

		_Factory.checkVotazioneOpen = function(id) {
			return $http.get(urlBase + '/votazioni/' + id + '/open');
		}; 

		_Factory.getVotazioneResults = function(id) {
			return $http.get(urlBase + '/votazioni/' + id + '/results');
		}; 

		_Factory.sendVotazioneScheda = function(id, obj) {
			return $http.post(urlBase + '/votazioni/' + id + '/scheda', obj);
		}; 

		_Factory.existVotazioneScheda = function(id, username) {
			return $http.get(urlBase + '/votazioni/' + id + '/exist/' + username);
		}; 

		// --- PUBLIC METHODS -----
		_Factory.setUserReset = function(obj) {
			return $http.post(urlBase + '/public/setUserReset', obj);
		}; 

		_Factory.resetPwd = function(obj) {
			console.log('_Factory.resetPwd');
			console.dir(obj);
			
			return $http.post(urlBase + '/public/reset/password', obj);
		}; 

		_Factory.checkToken = function(obj) {
			var username 	= obj.username || '',
					pec 			= obj.pec || '',
					token			= obj.token || '';
			
			return $http.get(urlBase + '/public/reset/' 
											 + username + '/'
											 + pec + '/'
											 + token
											);
		}; 
		
		return _Factory;
	});
})();
