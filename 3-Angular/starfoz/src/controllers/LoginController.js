'use strict';

starFoz.controller('LoginController', function($scope, $location, customAuth) {

  $scope.login = function() {

// customAuth.login($scope.user.username, $scope.user.pass, function(isLogged) {
  // if (isLogged == true) {
    // $location.path('/');
  //}
//});

    customAuth.login($scope.user.username, $scope.user.pass)
      .then(
        // success
        function(isLogged) {
          console.log('isLogged: %o', isLogged);
          if (isLogged === true) {
            $location.path('/');  
          } else {
            $scope.loginForm.credentials.$setValidity('unauthorized', false);
          }
        },
        // error
        function(response) {
          console.error(response);
        }
      );
  };
});