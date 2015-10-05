## Run

Instalar Node antes.

1. `$ npm install`
2. `$ node server`

## Escopo da app

1. Página principal de boas vindas e link de "Entrar"
2. Página de login para Administrativo
3. Alterar idioma
4. Administrativo:  
   CRUD Usuários (Nome, username, senha, confirmação, perfis: owner e contributor)  
  CRUD dicas (nome, descrição, duração média, fotos)  
  Exibir log de erros da app  
  Exibir estatísticas HTTP  
5. Usuário visitante:
  Listar dicas  
  Buscar  
  Ordenar por qualquer campo  
  Avaliar dicas  
  Mostrar aviso quando está offline  
  Página 404 e de erro  