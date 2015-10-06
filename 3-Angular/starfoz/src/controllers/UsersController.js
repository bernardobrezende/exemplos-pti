'use strict';

starFoz.controller('UsersController', function($scope, $http, apiInfo) {
  $http.get(apiInfo.baseUrl + '/users')
    .then(function(response) {
      $scope.users = response.data;
    });

  $scope.register = function() {
    
    console.log($scope.newUserForm);
    console.log($scope.newUser);

    $http.post(apiInfo.baseUrl + '/users', $scope.newUser)
      .then(function(response) {
        $scope.users.push(response.data);
      });

  };
});