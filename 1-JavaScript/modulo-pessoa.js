var meuApp = meuApp || {};
meuApp.models = {};

meuApp.models.Pessoa = (function() {
  'use strict';

  // campo privado
  var cpf;
  
  // construtor
  function Pessoa(nome, c) {
    this.nome = nome;
    cpf = c;
  };

  // método de instância
  Pessoa.prototype.tomarCafe = function() {
    return console.log(formatarTexto.call(this) + " está tomando café");
  };

  // método estático
  Pessoa.bebidaFavorita = function() {
    return Math.random() < .5 ? 'cerveja' : 'café';
  };

  // método privado
  function formatarTexto() {
    return this.nome + " cujo cpf é " + cpf;
  };

  return Pessoa;

})();

var p1 = new meuApp.models.Pessoa('Pessoa 1', '94503495809');
var p2 = new meuApp.models.Pessoa('Pessoa 2', '09451231123');

console.log(p1.cpf); // undefined, cpf não é conhecido externamente
console.log(p1.tomarCafe()); // 'Pessoa 1 cujo cpf é 94503495809 está tomando café'
p1.cpf = 'novo cpf';
console.log(p1.cpf); // 'novo cpf' 
console.log(p1.tomarCafe()); // 'Pessoa 1 cujo cpf é 94503495809 está tomando café'
console.log(p2.cpf); // undefined, cpf não é conhecido externamente
console.log(p2.tomarCafe()); // 'Pessoa 2 cujo cpf é 94503495809 está tomando café'
console.log(meuApp.models.Pessoa.bebidaFavorita());