const productsService = require('../services/products.service');

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

  response.status(201).json({
    name,
    id: message,
  });
};

const updateProduct = async (request, response) => {
  const product = request.body;
  const { id } = request.params;
  await productsService.updateProduct(product, id);
  response.status(200).json({
    id,
    name: product.name,
  });
};

const deleteProduct = async (request, response) => {
  const { id } = request.params;
  await productsService.deleteProduct(id);
  response.status(204).send();
};

const searchProduct = async (request, response) => {
  const { q } = request.query;
  const { message } = await productsService.searchProduct(q);
  response.status(200).json(message);
};
 
module.exports = {
  listAllProducts,
  listProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};