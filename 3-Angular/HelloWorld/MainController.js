'use strict';

angular.module('helloWorld')
  .controller('MainController', [ '$scope', '$http', '$timeout', function($scope, $http, $timeout) {
    
    $scope.outrasNoticias = [
      { webTitle: 'Notícia Fixa 1', sectionName: 'Economics', webPublicationDate: new Date() },
      { webTitle: 'Notícia Fixa 2', sectionName: 'Sports', webPublicationDate: new Date() },
      { webTitle: 'Notícia Fixa 3', sectionName: 'Social', webPublicationDate: new Date() }
    ];

    var pesquisar = function(pagina, textoBusca) {

      console.log('pagina: %o', pagina);

      textoBusca = textoBusca || 'terezinha';

      var urlRequest = 'http://content.guardianapis.com/search?api-key=test';
      $http.get(urlRequest + '&q='+ textoBusca +'&page='+pagina)
        .then(function(res) {
          console.log(res);
          if (res.data.response.results.length > 0) {
            res.data.response.results[0].sectionName = null;
            $scope.response = angular.copy(res.data.response);  
          } else {
            $scope.response.results = [];
            $scope.response.total = 0;
          }
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

    // registrar evento que vai "observar" alterações na buscaServidor
    $scope.$watch('buscaServidor', function(newVal, oldVal) {
      console.log('oldVal: %o - newVal: %o', oldVal, newVal);
      /*if (batman) {

      }
      if (typeof batman === 'undefined') {

      }*/
      if (angular.isDefined(newVal) && newVal.length > 3) {
        pesquisar(
          $scope.response.currentPage,
          $scope.buscaServidor
        );  
      }
    });

  }]);





