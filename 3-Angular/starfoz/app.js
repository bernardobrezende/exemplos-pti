'use strict';

var starFoz = angular.module('starFoz', [ 'ngRoute' ]);

starFoz.constant('appInfo', {
  name: 'StarFoz',
  versionCode: '0.1',
  versionName: 'lime-goldfish'
});

starFoz.constant('apiInfo', {
  baseUrl: 'http://localhost:3000'
});

starFoz.config(function($routeProvider) {

  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/users', {
      templateUrl: 'views/users.html',
      controller: 'UsersController'
    });
});