'use strict';

starFoz.controller('RootController', function($scope, appInfo) {
  $scope.appInfo = appInfo;
  $scope.copyrightYear = new Date().getFullYear();
});