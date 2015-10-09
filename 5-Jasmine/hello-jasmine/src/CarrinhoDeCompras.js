// public class CarrinhoDeCompras

function CarrinhoDeCompras(itens) {
  this.itens = itens || [];
};

CarrinhoDeCompras.prototype.adicionar = function(item) {
  this.itens.push(item);
};

CarrinhoDeCompras.prototype.remover = function(sku) {
  var elemToRemove = this.itens.findBySku(sku)
  , index = this.itens.indexOf(elemToRemove);

  this.itens.removerNaPosicao(index);
};

CarrinhoDeCompras.prototype.atualizarQuantidade = function(sku, quantidade) {
  var elem = this.itens.findBySku(sku);
  elem.quantidade = quantidade;
};

CarrinhoDeCompras.prototype.calcularValorTotal = function() {
  
  var desconto = this.sortearDesconto() === true ? 0.1 : 0;

  var total = this.itens.reduce(function(soma, elem) {
    return soma + elem.calcularSubTotal();
  }, 0);

  return total -= total * desconto;
};

CarrinhoDeCompras.prototype.sortearDesconto = function() {
  var coin = Math.random();
  var sorte = coin < 0.4;
  return sorte;
};

// }