'use strict';

starFoz.service('customAuth', function($http, $q, apiInfo) {
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

    var deferred = $q.defer();

    $http.get(apiInfo.baseUrl + '/users')
      .then(
        // success
        function(response) {
          var array = response.data;
          angular.forEach(array, function(elem) {
            if (elem.userName === username && elem.pass === password) {
              localStorage.setItem('session', angular.toJson(elem));
              // if (angular.isFunction(cb)) cb(true);
              deferred.resolve(true);
            }
          });
          deferred.resolve(false);
        },
        // error
        function(response) {
          deferred.reject('erro na consulta de usuários: ' + response.status + ' ' + response.statusText);
        }
      );

    return deferred.promise;
  };
});