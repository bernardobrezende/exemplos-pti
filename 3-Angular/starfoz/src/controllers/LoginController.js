'use strict';

starFoz.controller('LoginController', function($scope) {
  $scope.login = function() {
    console.log($scope.user);
  };
});