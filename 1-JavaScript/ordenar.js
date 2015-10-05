// http://jsperf.com/bubblesort-vs-array-sort-ii/3

var clubes = [
  {
    nome: 'Arsenal',
    titulos: [
      { desc: 'Nacionais', qtd: 13 },
      { desc: 'Continentais', qtd: 0 },
      { desc: 'Mundiais', qtd: 0 }
    ]
  }, 
  {
    nome: 'Manchester United',
    titulos: [
      { desc: 'Nacionais', qtd: 20 },
      { desc: 'Continentais', qtd: 3 },
      { desc: 'Mundiais', qtd: 2 }
    ]
  },
  {
    nome: 'Liverpool',
    titulos: [
      { desc: 'Nacionais', qtd: 18 },
      { desc: 'Continentais', qtd: 5 },
      { desc: 'Mundiais', qtd: 0 }
    ]
  },
  {
    nome: 'Chelsea Football Club',
    titulos: [
      { desc: 'Nacionais', qtd: 5 },
      { desc: 'Continentais', qtd: 1 },
      { desc: 'Mundiais', qtd: 0 }
    ]
  }
];

function ordenaPorIndiceDeTitulo(array, ind) {
  var sorted = array.concat(), houveTroca;
  do {
    houveTroca = false;
    for (var j = 0, len = sorted.length; j < len-1; j++) {
      var precisaTrocar = sorted[j].titulos[ind].qtd < sorted[j+1].titulos[ind].qtd;
      if (precisaTrocar) {
        var aux = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = aux;
        houveTroca = true;
      }
    }
  } while (houveTroca);

  return sorted;
};

function ordenaPorIndiceDeTitulo(array, ind) {
  return array.concat()
    .sort(function(a,b) {
      // 0 = Nacionais
      //return b.titulos[ind].qtd - a.titulos[ind].qtd;
      return a.titulos[ind].qtd < b.titulos[ind].qtd;
    });
};

// Exercício 1
var ordenadosPorNacional = (function ordenaPorNacionais(array) {
  return ordenaPorIndiceDeTitulo(array, 0);
})(clubes);

// Exercício 2
var ordenadosPorContinental = (function ordenaPorContinentais(array) {
  return ordenaPorIndiceDeTitulo(array, 1);
})(clubes);

// Exercício 3
var ordenaPorMundiais = (function ordenaPorContinentais(array) {
  return ordenaPorIndiceDeTitulo(array, 2);
})(clubes);

console.log(ordenadosPorNacional[0].nome);
console.log(ordenadosPorContinental[0].nome);
console.log(ordenaPorMundiais[0].nome);







