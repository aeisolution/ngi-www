(function () {
  'use strict';

  var app = angular.module('app');
	
	app.controller('LoginCtrl', ['$scope', '$window', '$location', 'UserAuthFactory', 'AuthenticationFactory', 'logger',
		function($scope, $window, $location, UserAuthFactory, AuthenticationFactory, logger) {
			$scope.user = {
				username: '',
				password: ''
			};

			$scope.login = function() {

				var username = $scope.user.username,
					password = $scope.user.password;

				if (username !== undefined && password !== undefined) {
					UserAuthFactory.login(username, password).success(function(data) {

						console.log('UserAuthFactory.login - data');
						console.dir(data);
						
						AuthenticationFactory.isLogged = true;
						AuthenticationFactory.user = data.user.username;
						AuthenticationFactory.userRole = data.user.role;

						$window.sessionStorage.token = data.token;
						$window.sessionStorage.user = data.user.username; // to fetch the user details on refresh
						$window.sessionStorage.userRole = data.user.role; // to fetch the user details on refresh

						
						$location.path("/dashboard");

					}).error(function(status) {
						logger.logError('Username e/o password errate.');
					});
				} else {
					logger.logError('inserire credenziali di accesso');
				}

			};

		}
	]);
})();