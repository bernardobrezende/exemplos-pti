'use strict';

// starFoz.service('Metrics');
starFoz.service('metrics', function($http, apiInfo) {
  this.all = function() {
    return angular.fromJson(localStorage.getItem('http.stats')) ||
    {
      requests: 0,
      responses: 0,
      requestsErrors: 0,
      responsesErrors: 0
    };
  };

  this.sync = function() {
    var synchMetrics = this.all();
    synchMetrics.timestamp = new Date().getTime();

    return $http.post(apiInfo.baseUrl + '/metrics', synchMetrics);
  }
});













