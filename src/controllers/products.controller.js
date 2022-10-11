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

const addProduct = async (request, response) => {
  const { name } = request.body;
  const { message } = await productsService.addProduct({ name });
  console.log(message);

  response.status(201).json({
    name,
    id: message,
  });
};
 
module.exports = {
  listAllProducts,
  listProductById,
  addProduct,
};