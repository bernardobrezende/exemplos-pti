'use strict';

starFoz.controller('RootController', function($scope, $location, appInfo, customAuth) {
  $scope.appInfo = appInfo;
  $scope.copyrightYear = new Date().getFullYear();
  
  var updateUserData = function(isLogged) {
    $scope.isLogged = isLogged;
    $scope.currentUser = customAuth.getCurrentUser();
  };

  // atualizar carregamento da página
  updateUserData(customAuth.isLogged);
  
  $scope.logout = function() {
    customAuth.logout();
    $location.path('/');
  };

  // atualizar quando usuário loga/desloga em outra página
  $scope.$on('logged:changed', function(event, data) {
    console.log('logged changed - %o', data);
    updateUserData(data);
  });
});