'use strict';

starFoz.factory('customInterceptor', function($q) {

  var stats = angular.fromJson(localStorage.getItem('http.stats')) ||
  {
    requests: 0,
    responses: 0,
    requestsErrors: 0,
    responsesErrors: 0
  };

  var incrementAndSync = function(prop) {
    stats[prop]++;
    localStorage.setItem('http.stats', angular.toJson(stats));
  };

  return {
    request: function(request) {
      console.log('nova request: %o', request);
      incrementAndSync('requests');
      return request;
    },
    response: function(response) {
      console.log('nova resposta: %o', response);
      incrementAndSync('responses');
      return response;
    },
    requestError: function(requestError) {
      console.error('Error on request: %o', requestError);
      incrementAndSync('requestsErrors');
      return $q.reject(requestError);
    },
    responseError: function(responseError) {
      console.error('Error on response: %o', responseError);
      incrementAndSync('responsesErrors');
      return $q.reject(responseError);
    }
  };
});


