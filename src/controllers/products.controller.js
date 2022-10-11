const productsService = require('../services');

const listAllProducts = async (_request, response) => {
  const { message } = await productsService.findAll();
  response.status(200).json(message);
};

const listProductById = async (request, response) => {
  const { id } = request.params;
  const { message, type } = await productsService.findById(id);

  if (type) {
    response.status(404).json({
      message,
    });
    return;
  }

  response.status(200).json(message);
};

module.exports = {
  listAllProducts,
  listProductById,
};