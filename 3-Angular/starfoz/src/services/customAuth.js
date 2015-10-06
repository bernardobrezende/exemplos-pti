'use strict';

starFoz.service('customAuth', function($rootScope, $http, $q, apiInfo) {
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
          var matchCredentials = false;
          angular.forEach(array, function(elem) {
            if (elem.userName === username && elem.pass === password) {
              localStorage.setItem('session', angular.toJson(elem));
              // if (angular.isFunction(cb)) cb(true);
              matchCredentials = true;
            }
          });
          _setIsLogged(matchCredentials);
          deferred.resolve(matchCredentials);
        },
        // error
        function(response) {
          deferred.reject('erro na consulta de usuários: ' + response.status + ' ' + response.statusText);
        }
      );

    return deferred.promise;
  };

  this.logout = function() {
    localStorage.removeItem('session');
    _setIsLogged(false);
  };

  var _setIsLogged = function(newVal) {
    this.isLogged = newVal;
    $rootScope.$broadcast('logged:changed', this.isLogged);
    // $scope.$emit();
  }.bind(this);

  this.isLogged = angular.fromJson(localStorage.getItem('session')) !== null;
});