'use strict';

angular.module('helloWorld')
  .controller('IndexController', [ '$scope', '$timeout', function($scope, $timeout) {
    $scope.nomeApp = 'Hello World Software';
  }]);