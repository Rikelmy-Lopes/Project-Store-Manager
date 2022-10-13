const salesModel = require('../models/sales.model');
const inputValidators = require('./validations/validationsInputValues');

const addSale = async (sales) => {
  const error = inputValidators.validadeSales(sales);
  if (error.type) {
    return error;
  }
  const insertId = await salesModel.addSale(sales);
  return { type: null, message: insertId };
};

const findAll = async () => {
  const sales = await salesModel.findAll();
  return { type: null, message: sales };
};

const findById = async (id) => {
  const error = inputValidators.validateId(id);
  if (error.type) {
    return error;
  }

  const sale = await salesModel.findById(id);
  if (sale) return { type: null, message: sale };
  return { type: 'PRODUCT NOT FOUND', message: 'Sale not found' };
};

module.exports = {
  addSale,
  findAll,
  findById,
};