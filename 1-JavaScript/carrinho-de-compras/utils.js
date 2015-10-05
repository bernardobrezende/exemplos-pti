Array.prototype.removerNaPosicao = function(index) {
  return this.splice(index, 1);
};

Array.prototype.findBySku = function(sku) {
  var result = null;
  this.forEach(function(elem, index) {
    if (elem.sku === sku) {
      result = elem;
    }
  })
  return result;
};