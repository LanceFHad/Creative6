angular.module('myApp', []).
  controller('myController', ['$scope', '$http',
                              function($scope, $http) {
	console.log("in angular controller");
    $http.get('/user/profile')
        .success(function(data, status, headers, config) {
      $scope.user = data;
      $scope.error = "";
    }).
    error(function(data, status, headers, config) {
      $scope.user = {};
      $scope.error = data;
    });
  }]);

