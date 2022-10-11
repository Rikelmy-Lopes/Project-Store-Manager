const productsModel = require('../models');
const { validateId } = require('./validations/validationsInputValues');

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

module.exports = {
  findAll,
  findById,
};