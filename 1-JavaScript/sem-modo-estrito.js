// 1 - Referenciar variáveis não declaradas;
function foo() {
  variavelMalDigitada=3;
}
foo(); //ReferenceError

// 2 - Tentar escrever em propriedades somente leitura
NaN = 'Not a Number';

var pessoa = {};
Object.defineProperty(pessoa, "cpf", {
  value: '27522831563',
  writable: false
});
// Não faz a atribuição mas também não dá erro
pessoa.cpf = 'novo cpf';

// 3 - Tentar extender objetos não-extensíveis
var objJogoFixo = {};
Object.preventExtensions(objJogoFixo);
// Não altera e não dá erro
objJogoFixo.nome = 'Banjo Kazooie';

// 4 - Tentar deletar propriedades "não-deletáveis"
delete Object.prototype;

// 5 - Propriedades duplicadas. O último campo declarado é o que mantém o valor.
var jogo = { nome: 'The Witcher 3', nome: 'O Mago Três' };
console.log(jogo.nome);

// 6 - Nomes de parâmetros duplicados.
// O último parâmetro informado é o que mantém o valor.
var ordenaJogos = function(j1, j2, j2) {
  return [ j1, j2, j2 ];
};
console.log(ordenaJogos('j1', 'j2-1', 'j2-2'));

// 7 - Números em Base 8 (Octal) não estão na especificação mas browsers suportam
var somar = function() {
  return 015 + 1;
};
// 14, pois 015 (octal) é 13 em decimal
console.log(soma);