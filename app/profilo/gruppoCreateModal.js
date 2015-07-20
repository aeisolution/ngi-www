(function () {
    'use strict';
    var controllerId = 'gruppoCreateModal';
    angular.module('app').controller(controllerId, ['$scope', '$modalInstance', 'gruppo', modalistance]);

    function modalistance($scope, $modalInstance, gruppo) {
        $scope.gruppo = gruppo;

        $scope.ok = function () {
            $modalInstance.close($scope.gruppo);
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