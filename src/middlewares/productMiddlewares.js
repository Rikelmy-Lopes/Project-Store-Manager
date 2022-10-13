const productsService = require('../services/products.service');

const validadeNameProduct = (request, response, next) => {
  const { name } = request.body;
  if (name === undefined) {
    response.status(400).json({ message: '"name" is required' });
    return;
  }

  if (name.length < 5) {
    response.status(422).json({ message: '"name" length must be at least 5 characters long' });
    return;
  }

  next();
};

const productsIdsExist = async (request, response, next) => {
  const sales = request.body;
  if (await productsService.productsIdsExist(sales)) {
    next();
    return;
  }
  response.status(404).json({ message: 'Product not found' });
};

const productIdExist = async (request, response, next) => {
  const { id } = request.params;
  if (await productsService.productIdExist(id)) {
    next();
    return;
  }
  response.status(404).json({ message: 'Product not found' });
};

module.exports = {
  validadeNameProduct,
  productIdExist,
  productsIdsExist,
};