'use strict';

starFoz.service('customAuth', function($http, $location, apiInfo) {
  this.login = function(username, password) {

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
            if (elem.userName === username && elem.pass === password) {
              console.log('usuário existe na base!');
              localStorage.setItem('session', angular.toJson(elem));
              $location.path('/');
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