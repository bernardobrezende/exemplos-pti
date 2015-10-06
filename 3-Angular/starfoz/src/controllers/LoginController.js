'use strict';

starFoz.controller('LoginController', function($scope, $http) {
  $scope.login = function() {
    console.log($scope.user);
  };
});