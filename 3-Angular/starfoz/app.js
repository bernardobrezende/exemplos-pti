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

starFoz.config(function($routeProvider) {

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
      controller: 'UsersController'
    })
    .otherwise({
      templateUrl: 'views/404.html'
    });
});