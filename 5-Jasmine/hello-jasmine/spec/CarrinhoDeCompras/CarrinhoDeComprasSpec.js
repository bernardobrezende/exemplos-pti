'use strict';

describe('CarrinhoDeCompras', function() {
  var carrinhoDeCompras, item;

  it('quando é criado tem itens vazio', function() {
    carrinhoDeCompras = new CarrinhoDeCompras();
    expect(carrinhoDeCompras.itens).toEqual([]);
    // JUnit:
    // assertEquals(new Item[3], carrinhoDeCompras.getItens());
  });

  it('quando é criado informando itens', function() {
    // AAA
    // Arrange
    var itens = [
      new Item({ sku: 'sku', descricao: 'descr', quantidade: 1, valorUnitario: 3.14 }),
      new Item({ sku: 'sku2', descricao: 'descr2', quantidade: 31, valorUnitario: 31.4 }),
    ];
    // Act
    carrinhoDeCompras = new CarrinhoDeCompras(itens);
    // Assert
    expect(carrinhoDeCompras.itens).toEqual(itens);
  });

  describe('adicionar', function() {

    it('deve adicionar item no carrinho', function() {
      var novoItem = new Item({ sku: 'sku', descricao: 'descr', quantidade: 1, valorUnitario: 3.14 });
      var itensEsperado = [ novoItem ];

      carrinhoDeCompras = new CarrinhoDeCompras();
      carrinhoDeCompras.adicionar(novoItem);
      expect(carrinhoDeCompras.itens).toEqual(itensEsperado);

    });

    it('deve adicionar dois itens ao carrinho', function() {
      var novoItem1 = new Item({ sku: 'sku', descricao: 'descr', quantidade: 1, valorUnitario: 3.14 });
      var novoItem2 = new Item({ sku: 'sku2', descricao: 'descr3', quantidade: 11, valorUnitario: 3.14 });
      var itensEsperado = [ novoItem1, novoItem2 ];

      carrinhoDeCompras = new CarrinhoDeCompras();
      carrinhoDeCompras.adicionar(novoItem1);
      carrinhoDeCompras.adicionar(novoItem2);
      expect(carrinhoDeCompras.itens).toEqual(itensEsperado);

    });

    it('deve adicionar item ao carrinho após criar com outros dois', function() {
      var novoItem1 = new Item({ sku: 'sku', descricao: 'descr', quantidade: 1, valorUnitario: 3.14 });
      var novoItem2 = new Item({ sku: 'sku2', descricao: 'descr2', quantidade: 11, valorUnitario: 3.14 });
      var novoItem3 = new Item({ sku: 'sku3', descricao: 'descr3', quantidade: 11, valorUnitario: 3.14 });
      var itensEsperado = [ novoItem1, novoItem2, novoItem3 ];

      carrinhoDeCompras = new CarrinhoDeCompras([ novoItem1, novoItem2 ]);
      carrinhoDeCompras.adicionar(novoItem3);
      expect(carrinhoDeCompras.itens).toEqual(itensEsperado);

    });

  });

  describe('remover', function() {
    it('deve remover um item do inventário com um', function() {
      var item = new Item({ sku: 'sku', descricao: 'descr', quantidade: 1, valorUnitario: 3.14 });
      carrinhoDeCompras = new CarrinhoDeCompras([ item ]);
      carrinhoDeCompras.remover('sku');
      expect(carrinhoDeCompras.itens).toEqual([]);
    });
    it('deve remover um item de um inventários com dois', function() {
      var item1 = new Item({ sku: 'sku', descricao: 'descr', quantidade: 1, valorUnitario: 3.14 });
      var item2 = new Item({ sku: 'sku2', descricao: 'descr', quantidade: 1, valorUnitario: 3.14 });
      carrinhoDeCompras = new CarrinhoDeCompras([ item1, item2 ]);
      carrinhoDeCompras.remover('sku2');
      expect(carrinhoDeCompras.itens).toEqual([item1]);
    });

    it('remover um item de um inventários sem itens lança erro', function() {
      carrinhoDeCompras = new CarrinhoDeCompras();
      expect(function() {
        carrinhoDeCompras.remover('sku2');  
      }).toThrowError('Carrinho não possui itens!');
    });

    it('remover um item de um inventário undefined deve lançar erro', function() {
      carrinhoDeCompras = new CarrinhoDeCompras();
      carrinhoDeCompras.itens = undefined;
      expect(function() {
        carrinhoDeCompras.remover('sku2');  
      }).toThrowError('Carrinho não possui itens!');
    });

  });









});