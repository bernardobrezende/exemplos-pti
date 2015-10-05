// hwResultadoPesquisa //camelCase
// <div hw-resultado-pesquisa>

'use strict';

angular.module('helloWorld')
  .directive('hwResultadoPesquisa', function() {
    return {
      scope: {
        texto: '='
      },
      // A = attribute
      // E = element
      // C = class
      restrict: 'CEA',
      template: '<h1 class="bold" ng-show="texto">{{ texto }}, Aqui vão os resultados!</h1>',
      link: function(scope, elem, attrs) {
        elem.on('click', function() {
          //elem.html(scope.texto);
        });
        console.log('scope: %o', scope);
        console.log('elem: %o', elem);
        console.log('attrs: %o', attrs);
        console.log('opcao: %o', attrs.opcao);
      }
    };
  });

// coffeescript:
/*angular.module('helloWorld')
  .directive 'hwResultadoPesquisa', -> {}
*/


