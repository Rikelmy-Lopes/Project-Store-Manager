const saleService = require('../services/sales.service');

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

const saleIdExist = async (request, response, next) => {
  const { id } = request.params;
  if (await saleService.saleIdExist(id)) {
    next();
    return;
  }
  response.status(404).json({ message: 'Sale not found' });
};

module.exports = {
  validadeProductId,
  validadeQuantity,
  saleIdExist,
};