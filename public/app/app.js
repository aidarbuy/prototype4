var app = angular.module('app', ['ngResource']);

angular.module('app')
    .controller('testCtrl', function($scope, $resource, doctors) {
        $scope.doctors = $resource('/api/doctors').query();
        
        $scope.submit = function(){
            
            var doctor = {name:$scope.name, description:$scope.description};
            doctors.save(doctor);
            $scope.doctors.push(doctor);
        };
    });