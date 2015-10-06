'use strict';

starFoz.controller('LoginController', function($scope, customAuth) {
  $scope.login = function() {
    customAuth.login($scope.user.username, $scope.user.pass);
  };
});