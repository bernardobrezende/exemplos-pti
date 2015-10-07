'use strict';

starFoz.controller('UsersController', function($scope, apiInfo, users) {
  
  // carregando inicialmente dados para tabela de usuários
  users.all().then(function(response) {
    $scope.users = response.data;
  });

  // carregando opções de roles
  users.roles().then(function(response) {
    $scope.roles = response.data.map(function(elem) {
      return elem.description;
    });
  });

  $scope.register = function() {

    // Fazendo cópia de valores para deletar propriedade passConfirm
    // e não enviá-la para o servidor
    var newUser = angular.copy($scope.newUser);
    delete newUser.passConfirm;

    users.register($scope.newUser).then(function(response) {
      $scope.users.push(response.data);
    });

    resetForm();
  };

  var resetForm = function() {
    delete $scope.newUser;
    $scope.newUserForm.$setPristine();
  };
});