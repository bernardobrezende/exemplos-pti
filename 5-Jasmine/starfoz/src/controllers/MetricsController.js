'use strict';

starFoz.controller('MetricsController', function($scope, metrics) {
  $scope.metrics = metrics.all();

  $scope.sync = function() {
    metrics.sync().then(
      // success
      function(res) {
        $scope.feedbackMessage = 'Sincronizado com sucesso!';
      },
      function(err) {
        $scope.feedbackMessage = 'Erro ao sincronizar!';
      });
  };
});