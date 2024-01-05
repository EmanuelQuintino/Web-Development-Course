// ⚠️ Desafio: Crie uma lógica para somar total do carrinho de compras com ojeto contendo nome, quantidade e valor de cada item

const products = [
  { name: "Camiseta", price: 20, units: 3 },
  { name: "Calça", price: 50, units: 2 },
  { name: "Tênis", price: 80, units: 1 },
  { name: "Boné", price: 15, units: 4 },
];

const calculateTotal = (products) => {
  const total = products.reduce((acc, product) => {
    return acc + product.price * product.units;
  }, 0);

  return total;
};

const totalPrice = calculateTotal(products);
console.log("Total da compra: R$" + totalPrice);
