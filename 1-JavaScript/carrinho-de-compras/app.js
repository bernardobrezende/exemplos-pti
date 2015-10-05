var params = {
  sku: '347865',
  descricao: 'xilo phone',
  quantidade: 12,
  valorUnitario: 134.23
};

var item = new Item(params);

var itens = [
  item,
  new Item({
    sku: '564sfdg235',
    descricao: 'xilo pad',
    quantidade: 34,
    valorUnitario: 897.45
  })
];

var carrinho = new CarrinhoDeCompras(itens);
console.log(carrinho);

// Ex 2
carrinho.adicionar(new Item({
  sku: 'novo-sku',
  descricao: 'chocolate 1000k',
  quantidade: 15,
  valorUnitario: 22.00
}));
console.log('Ex 2 - adicionar item: %o', carrinho);

carrinho.remover('novo-sku');
console.log('Ex 2 - remover item: %o', carrinho);

// Ex 3
carrinho.atualizarQuantidade('564sfdg235', 6);
console.log('Ex 3 - atualizar quantidade: %o', carrinho);

// Ex 4
console.log('Ex 4 - calcular sub total: %o', item.calcularSubTotal());

// Ex 5
console.log('Ex 5 - calcular valor total: %o', carrinho.calcularValorTotal());