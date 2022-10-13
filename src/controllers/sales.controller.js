const salesService = require('../services/sales.service');

const addSales = async (request, response) => {
  const sales = request.body;
  const { message } = await salesService.addSale(sales);
  response.status(201).json({
    id: message,
    itemsSold: sales,
  });
};

const listAllSales = async (_request, response) => {
  const { message } = await salesService.findAll();
  response.status(200).json(message);
};

const listSalesById = async (request, response) => {
  const { id } = request.params;
  const { message, type } = await salesService.findById(id);

    if (type) {
    response.status(404).json({
      message,
    });
    return;
  }

  response.status(200).json(message);
};

const deleteSale = async (request, response) => {
  const { id } = request.params;
  await salesService.deleteSale(id);
  response.status(204).send();
};

const updateSale = async (request, response) => {
  const sales = request.body;
  const { id } = request.params;
  await salesService.updateSale(sales, id);
  response.status(200).json({
    saleId: id,
    itemsUpdated: sales,
  });
};

module.exports = {
  addSales,
  listAllSales,
  listSalesById,
  deleteSale,
  updateSale,
};