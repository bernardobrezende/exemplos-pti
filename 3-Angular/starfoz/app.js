'use strict';

var starFoz = angular.module('starFoz', [ 'ngRoute', 'ngMessages' ]);

starFoz.constant('appInfo', {
  name: 'StarFoz',
  versionCode: '0.1',
  versionName: 'lime-goldfish'
});

starFoz.constant('apiInfo', {
  baseUrl: 'http://localhost:3000'
});

starFoz.constant('roleTypes', {
  OWNER: 'Owner',
  CONTRIBUTOR: 'Contributor'
})

starFoz.config(function($routeProvider, $httpProvider) {

  console.log('config');

  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/users', {
      templateUrl: 'views/users.html',
      //template: '<h1>{{ ::bemVindo | reverse }}</h1>'
      controller: 'UsersController'
      /*controller: function($scope) {
        $scope.bemVindo = 'Olá, bem vindo';
      }*/
    })
    .when('/metrics', {
      templateUrl: 'views/metrics.html',
      controller: 'MetricsController'
    })
    .otherwise({
      templateUrl: 'views/404.html'
    });

    // registrar interceptor
    $httpProvider.interceptors.push('customInterceptor');
    /* Implementação inline
    $httpProvider.interceptors.push(
      function($q) {
        return {
          'request': function(rq) {
            console.log('segundo interceptor: %o', rq);
            return rq;
          }
        }
      }
    );
    */
});

starFoz.run(function($http, appInfo) {
  console.log('run');
  $http.defaults.headers.common['X-StarFoz-Version'] = appInfo.versionCode;
});
