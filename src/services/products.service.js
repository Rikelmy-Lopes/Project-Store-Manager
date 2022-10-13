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

const productsIdsExist = async (sales) => {
  const foundIds = [];
  const promises = sales.map(async (sale) => {
    const result = await productsModel.productIdExist(sale.productId);
    if (result.id) {
      foundIds.push(true);
    }
  });
  await Promise.all(promises);
  if (foundIds.length === sales.length) return true;
  return false;
};

const productIdExist = async (productId) => {
  const result = await productsModel.productIdExist(productId);
  if (result.id) {
    return true;
  }
  return false;
};

const updateProduct = async (product, id) => {
  const errorName = inputValidators.validadeNameProduct(product);
  if (errorName.type) {
    return errorName;
  }
  const errorId = inputValidators.validateId(id);
  if (errorId.type) {
    return errorId;
  }

  await productsModel.updateProduct(product, id);
};

const deleteProduct = async (productId) => {
  const error = inputValidators.validateId(productId);
  if (error.type) {
    return error;
  }

  await productsModel.deleteProduct(productId);
};
  
module.exports = {
  findAll,
  findById,
  addProduct,
  productsIdsExist,
  productIdExist,
  updateProduct,
  deleteProduct,
};