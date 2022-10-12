const productsModel = require('../models/products.model');
const inputValidators = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (id) => {
  const error = inputValidators.validateId(id);
  if (error.type) {
    return error;
  }

  const product = await productsModel.findById(id);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT NOT FOUND', message: 'Product not found' };
};

const addProduct = async (product) => {
  const error = inputValidators.validadeNameProduct(product);
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