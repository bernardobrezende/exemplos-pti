'use strict';

starFoz.factory('users', function($http, apiInfo) {
  return {
    all: function() {
      return $http.get(apiInfo.baseUrl + '/users');
    },
    roles: function() {
      return $http.get(apiInfo.baseUrl + '/roles');
    },
    register: function(newUser) {
      return $http.post(apiInfo.baseUrl + '/users', newUser);
    },
    findByUserName: function(username) {
      return $http.get(apiInfo.baseUrl + '/users?userName='+username);
    }
  };
});