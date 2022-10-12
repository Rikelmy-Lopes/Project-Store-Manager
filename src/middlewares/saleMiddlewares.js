const utilsService = require('../services/utils/sales.service.utils');

const productIdExist = async (request, response, next) => {
  const sales = request.body;
  if (await utilsService.productIdExist(sales)) {
    next();
    return;
  }
  response.status(404).json({ message: 'Product not found' });
};

const validadeProductId = (request, response, next) => {
  const sales = request.body;
  if (sales.every((property) => Object.prototype.hasOwnProperty.call(property, 'productId'))) {
    next();
    return;
  }
  response.status(400).json({ message: '"productId" is required' });
};

const validadeQuantity = (request, response, next) => {
  const sales = request.body;
    if (!sales.every((sale) => Object.prototype.hasOwnProperty.call(sale, 'quantity'))) {
      response.status(400).json({ message: '"quantity" is required' });
      return;
    }
  if (sales.some((sale) => sale.quantity <= 0)) {
    response.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    return;
  }
  next();
};

module.exports = {
  productIdExist,
  validadeProductId,
  validadeQuantity,
};