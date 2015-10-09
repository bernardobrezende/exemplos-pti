'use strict';

describe('CarrinhoDeCompras', function() {
  var carrinhoDeCompras, item;

  beforeEach(function() {
    carrinhoDeCompras = new CarrinhoDeCompras();
  });

  it('deve ser criado com itens', function() {
    expect(carrinhoDeCompras.itens).toEqual([]);
  });

});