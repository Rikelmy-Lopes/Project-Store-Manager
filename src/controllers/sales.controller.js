const salesService = require('../services/sales.service');

const addSales = async (request, response) => {
  const sales = request.body;
  const { message } = await salesService.addProduct(sales);
  response.status(201).json({
    id: message,
    itemsSold: sales,
  });
};

module.exports = {
  addSales,
};