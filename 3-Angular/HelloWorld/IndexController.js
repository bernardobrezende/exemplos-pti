'use strict';

angular.module('helloWorld')
  .controller('IndexController', [ '$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    $scope.nomeApp = 'Hello World Software';
    
    var pesquisar = function(pagina) {

      var urlRequest = 'http://content.guardianapis.com/search?api-key=test';
      $http.get(urlRequest + '&q=justin bieber&page='+pagina)
        .then(function(res) {
          console.log(res);
          res.data.response.results[0].sectionName = null;
          $scope.response = angular.copy(res.data.response);
        }
      );
    };

    // primeiro carregamento
    pesquisar(1);

    $timeout(function() {
      $scope.linkAngular = "http://angularjs.org";
    }, 1000);

    /* Modo "não-angular"
    setTimeout(function() {
      $scope.$apply(function() {
        $scope.linkAngular = "http://angularjs.org";  
      });
    }, 2000);
    */

    $scope.proximaPagina = function() {
      pesquisar(++$scope.response.currentPage);
    };

    $scope.paginaAnterior = function() {
      pesquisar(--$scope.response.currentPage);
    };

  }]);





