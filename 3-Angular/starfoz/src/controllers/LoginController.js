'use strict';

starFoz.controller('LoginController', function($scope, $http, apiInfo) {
  $scope.login = function() {
    console.log($scope.user);

    /*
     * Versão utilizando busca na querystring
     * ATENÇÃO: NUNCA passe a senha de um usuário plana na querystring (nem criptografada!)
    $http.get(apiInfo.baseUrl + '/users?userName='+ $scope.user.username +'&pass=' + $scope.user.pass)
      .then(function(response) {
        console.log(response);
        if (response.data && response.data.length > 0) {
          console.log('usuário existe na base!');
        }
      });
    */

    $http.get(apiInfo.baseUrl + '/users')
      .then(
        // success
        function(response) {
          console.log('success: %o', response);

          var array = response.data;
          angular.forEach(array, function(elem) {
            if (elem.userName === $scope.user.username && elem.pass === $scope.user.pass) {
              console.log('usuário existe na base!');
            }
          });
        },
        // error
        function(response) {
          console.error('error: %o', response);
        }
      );
  };
});