// hwResultadoPesquisa //camelCase
// <div hw-resultado-pesquisa>

'use strict';

angular.module('helloWorld')
  .directive('hwResultadoPesquisa', function() {
    return {
      scope: {
        texto: '=', // texto="var-da-scope-controller"
        sum: '&', // gera uma função com a expressão
        subTexto: '@' // valor literal
      },
      // A = attribute
      // E = element
      // C = class
      restrict: 'CEA',
      //template: '<h1 class="bold" ng-show="texto">{{ texto }}, Aqui vão os resultados:</h1>',
      templateUrl: 'resultadoPesquisa.tpl.html',
      link: function(scope, elem, attrs) {
        console.log('= %o', scope.texto);
        console.log('& %o', scope.sum());
        console.log('@ %o', scope.subTexto);
        elem.on('click', function() {
          //elem.html(scope.texto);
        });
        /*console.log('scope: %o', scope);
        console.log('elem: %o', elem);
        console.log('attrs: %o', attrs);
        console.log('opcao: %o', attrs.opcao);*/
      }
    };
  });

// coffeescript:
/*angular.module('helloWorld')
  .directive 'hwResultadoPesquisa', -> {}
*/


