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
    exclude: function(id) {
      return $http.delete(apiInfo.baseUrl + '/users/' + id);
    },
    findByUserName: function(username) {
      return $http.get(apiInfo.baseUrl + '/users?userName='+username);
    }
  };
});