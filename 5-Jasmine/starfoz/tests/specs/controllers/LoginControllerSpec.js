'use strict';

describe('LoginController', function() {

  beforeEach(module('starFoz'));

  var $httpBackend, ctrl, scope, $location;

  beforeEach(inject(function($injector, $controller, $rootScope, _$location_, _customAuth_) {
    
    $httpBackend = $injector.get('$httpBackend');
    scope = $rootScope.$new();
    $location = _$location_;

    ctrl = $controller('LoginController', {
      $scope: scope,
      $location: $location,
      customAuth: _customAuth_
    });
    
  }));

  it('logs with username and password', function() {

    $httpBackend
      .when('GET', 'http://localhost:3000/users')
      .respond([{ id: 1, userName: 'john.doe', pass: '123', role: 'Owner' }]);
    
    scope.user = {
      username: 'john.doe',
      pass: '123'
    };

    scope.login();
    $httpBackend.flush();

    expect($location.path()).toBe('/');
  });

});