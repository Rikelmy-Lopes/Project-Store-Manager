const productsModel = require('../models');
const { validateId, validadeNameProduct } = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (id) => {
  const error = validateId(id);
  if (error.type) {
    return error;
  }

  const product = await productsModel.findById(id);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT NOT FOUND', message: 'Product not found' };
};

const addProduct = async (product) => {
  const error = validadeNameProduct(product);
  if (error.type) {
    return error;
  }
  
  const insertId = await productsModel.addProduct(product);
  return { type: null, message: insertId };
};

module.exports = {
  findAll,
  findById,
  addProduct,
};