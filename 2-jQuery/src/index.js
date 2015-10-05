//var $ = 4.10;
/*$('#texto');
document.getElementById('texto');
document.querySelectorAll('#texto');*/

var resultado = $('#texto');
console.log(resultado);

var nodoOriginal = document.getElementById('texto');
console.log(nodoOriginal);

var imprimirNaTelaSrc = function() {
  console.log($(this).attr('src'));
};

$('img').each(imprimirNaTelaSrc);

//$('img').attr('src', 'https://logodownload.org/wp-content/uploads/2015/05/internacional-porto-alegre-logo-escudo-1.png');

setInterval(function() {
  $('.textos span').toggleClass('fundo-rosa');
}, 500);

$('input[type=text]');
$('input[type=number]');
$('input[type]');
$('[type]').size();

// usa otimização da direita pra esquerda
$('div span:not(.texto-menor):eq(1)');
// vai selecionando de acordo com encadeamento
$('div span').not('.texto-menor').eq(1);
// or
$('h1:contains(Azul),h1:contains(azul)');

$('ol li:even'); // Pares
$('ol li:odd'); // Ímpares
$('ol li:not(:even)'); // Ímpares de forma "excêntrica"