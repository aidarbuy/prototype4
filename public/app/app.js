angular.module('app', ['ngResource']);

angular.module('app')
    .controller('testCtrl', function($scope, $resource) {
        $scope.doctors = $resource('/api/doctors').query();
    });