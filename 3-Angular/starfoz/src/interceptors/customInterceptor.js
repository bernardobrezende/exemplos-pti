'use strict';

starFoz.factory('customInterceptor', function($q) {

  var stats = angular.fromJson(localStorage.getItem('http.stats')) ||
  {
    requests: 0,
    responses: 0,
    requestsErrors: 0,
    responsesErrors: 0
  };

  return {
    request: function(request) {
      console.log('nova request: %o', request);
      stats.requests++;
      localStorage.setItem('http.stats', angular.toJson(stats));
      return request;
    },
    response: function(response) {
      console.log('nova resposta: %o', response);
      return response;
    },
    requestError: function(requestError) {
      console.error('Error on request: %o', requestError);
      return $q.reject(requestError);
    },
    responseError: function(responseError) {
      console.error('Error on response: %o', responseError);
      return $q.reject(responseError);
    }
  };
});