'use strict';

starFoz.directive('sfSameValue', function() {
  return {
    require: 'ngModel',
    scope: {
      // valor-interno: '=valor-externo'
      otherValue: '=sfSameValue'
      // otherValue: '='
    },
    link: function (scope, elem, attrs, ngModel) {

      // determina o critério para que o elemento desta diretiva seja válido
      ngModel.$validators.sfSameValue = function(currentValue) {
        return currentValue === scope.otherValue;
      };

      // 'observa' alterações no outro modelo vinculado à este
      scope.$watch('otherValue', function() {
        ngModel.$validate();
      });

    }
  }
});