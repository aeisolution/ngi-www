(function () {
    'use strict';
    var controllerId = 'propostaCreateModal';
    angular.module('app').controller(controllerId, ['$scope', '$modalInstance', 'proposta', modalistance]);

    function modalistance($scope, $modalInstance, proposta) {
        $scope.proposta = proposta;

        $scope.ok = function () {
            $modalInstance.close($scope.proposta);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.submitForm = function (isValid) {

            // check to make sure the form is completely valid
            if (isValid) {
                alert('our form is amazing');
            }

        };

    }
})();