'use strict';

starFoz.directive('sfUsernameAvailable', function($timeout, users) {
  return {
    require: 'ngModel',
    link: function(scope, elem, attrs, ngModel) {
      ngModel.$asyncValidators.sfUsernameAvailable = function(username) {
        return $timeout(function() {
          return users.findByUserName(username)
            .then(function(response) {
              var exists = angular.isArray(response.data) && response.data.length > 0;
              // caso exista, deve setar falso para dizer que o campo é inválido. true caso contrário.
              ngModel.$setValidity('userExists', exists ? false : true);
            });
          }, 500);
      };
    }
  }
});