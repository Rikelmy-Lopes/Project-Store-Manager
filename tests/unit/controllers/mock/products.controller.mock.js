const products = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const expectedPostSale = {
  id: 3,
  itemsSold: [
    {
      productId: 3,
      quantity: 1
    }
  ]
}


module.exports = {
  products,
  expectedPostSale
}