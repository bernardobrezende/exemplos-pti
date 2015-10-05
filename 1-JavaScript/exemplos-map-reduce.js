var cidades = JSON.parse('[{ "nome": "Porto Alegre", "fundacao": "1772-03-27T00:00:00", "populacao": 1467823 }, { "nome": "Foz do Iguaçu", "fundacao": "1914-05-10T00:00:00", "populacao": 263647 }, { "nome": "Florianópolis", "fundacao": "1673-03-24T00:00:00", "populacao": 461524 }]');

var dividirPopulacoes = function(cidadesJson) {
  return cidadesJson.map(function(elem) {
    return elem.populacao /= 2, elem;
    // Equivalente à:
    // elem.populacao /= 2;
    // return elem;
  });
};

console.log(dividirPopulacoes(cidades));

// Exercício 1 do dia 01
var getIdadeMediaComReduce = function(cidadesJson) {
  var soma = cidadesJson
    .reduce(function(soma, elem) {
    	var idade = new Date().getFullYear() - new Date(elem.fundacao).getFullYear();
      return soma + idade;
    }, 0);
  var media = soma / cidadesJson.length;
  return Math.round(media*100)/100;
};

var getIdadeMediaComMapReduce = function(cidadesJson) {
  var soma = cidadesJson
    .map(function(elem) {
      return new Date().getFullYear() - new Date(elem.fundacao).getFullYear();
    })
    .reduce(function(soma, elem) {
      return soma + elem;
    }, 0);
  var media = soma / cidadesJson.length;
  return Math.round(media*100)/100;
};

console.log(getIdadeMediaComMapReduce(cidades));