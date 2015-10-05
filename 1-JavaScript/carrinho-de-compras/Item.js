// public class Item

function Item(options) {
  options = options || {};
  this.sku = options.sku;
  this.descricao = options.descricao;
  this.quantidade = options.quantidade || 0;
  this.valorUnitario = options.valorUnitario;
};

Item.prototype.calcularSubTotal = function() {
  return this.quantidade * this.valorUnitario;
};

// }