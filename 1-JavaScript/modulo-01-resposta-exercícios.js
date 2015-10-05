var cidades = JSON.parse('[{ "nome": "Porto Alegre", "fundacao": "1772-03-27T00:00:00", "populacao": 1467823 }, { "nome": "Foz do Iguaçu", "fundacao": "1914-05-10T00:00:00", "populacao": 263647 }, { "nome": "Florianópolis", "fundacao": "1673-03-24T00:00:00", "populacao": 461524 }]');

// Exercício 1
var getIdadeMedia = function(cidadesJson) {
  var soma = 0;
  cidadesJson.forEach(function(elem) {
    var idade = new Date().getFullYear() - new Date(elem.fundacao).getFullYear();
    soma += idade;
  });
  var media = soma / cidadesJson.length;
  return Math.round(media*100)/100;
};

console.log(getIdadeMedia(cidades));

// Exercício 2
var getPopulacaoMedia = function(cidadesJson) {
  var soma = 0;
  cidadesJson.forEach(function(elem) {
    soma += elem.populacao;
  });
  return soma / cidadesJson.length;
};

console.log(getPopulacaoMedia(cidades));

// Exercício 3
var getPopulacaoAbaixoDaMedia = function(cidades) {
  var media = getPopulacaoMedia(cidades);

  var porAbaixoDaMedia = function(elem) {
    return elem.populacao < media;
  };

  return cidades.filter(porAbaixoDaMedia);
}

console.log(getPopulacaoAbaixoDaMedia(cidades));