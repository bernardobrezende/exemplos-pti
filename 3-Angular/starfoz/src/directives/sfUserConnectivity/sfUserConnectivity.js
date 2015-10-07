'use strict';

starFoz.directive('sfUserConnectivity', function($window) {
  return {
    templateUrl: 'src/directives/sfUserConnectivity/user-connectivity.tpl.html',
    link: function (scope, elem) {

      scope.online = $window.navigator.onLine;

      $window.addEventListener('offline', function () {
        scope.$apply(function() {
          scope.online = false;
        });
      }, false);

      $window.addEventListener('online', function () {
        scope.$apply(function() {
          scope.online = true;
        });
      }, false);

    }
  }
});