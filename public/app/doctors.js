app.factory('doctors', ['$resource', function($resource) {
    return $resource('/api/doctors/');
}]);