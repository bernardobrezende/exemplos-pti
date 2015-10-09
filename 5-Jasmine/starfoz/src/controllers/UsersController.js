'use strict';

starFoz.controller('UsersController', function($scope, apiInfo, users, customAuth, roleTypes) {
  
  // carregando inicialmente dados para tabela de usuários
  users.all().then(function(response) {
    $scope.users = response.data;
  });

  $scope.isOwner = customAuth.getCurrentUser().role === roleTypes.OWNER;

  // carregando opções de roles
  users.roles().then(
    // success
    function(response) {
      $scope.roles = response.data.map(function(elem) {
        return elem.description;
      });
    },
    // error
    function(error) {
      $scope.feedbackMessage = 'Ops, erro ao buscar perfis.';
    }
  );

  $scope.register = function() {

    // Fazendo cópia de valores para deletar propriedade passConfirm
    // e não enviá-la para o servidor
    var newUser = angular.copy($scope.newUser);
    delete newUser.passConfirm;

    users.register($scope.newUser).then(function(response) {
      $scope.users.push(response.data);
      $scope.feedbackMessage = 'Usuário criado com sucesso!';
    });

    resetForm();
  };

  $scope.exclude = function(id, index) {
    console.log(id);
    users.exclude(id).then(function() {
      // exclusão local, pode gerar inconsistência nos dados.
      // (se outra pessoa também excluir um registro antes de atualizarmos a tela)
      $scope.users.splice(index, 1);
      // outra forma seria recarregar todos os registro
      // buscando no servidor
      // users.all().then(function(response) { $scope.users = response.data });
      $scope.feedbackMessage = 'Usuário excluído com sucesso';
    });
  };

  var resetForm = function() {
    delete $scope.newUser;
    $scope.newUserForm.$setPristine();
  };
});