// hwResultadoPesquisa //camelCase
// <div hw-resultado-pesquisa>

'use strict';

angular.module('helloWorld')
  .directive('hwResultadoPesquisa', function() {
    return {
      // A = attribute
      // E = element
      // C = class
      // M = comment / markup
      restrict: 'CEA',
      template: '<h1 class="bold">{{ nome }}, Aqui vão os resultados!</h1>',
      link: function(scope, elem, attrs) {
        elem.on('click', function() {
          console.log('clicou');
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


