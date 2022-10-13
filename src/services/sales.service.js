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

const saleIdExist = async (saleId) => {
  const result = await salesModel.saleIdExist(saleId);
  if (result.id) {
    return true;
  }
  return false;
};

const deleteSale = async (saleId) => {
  const error = inputValidators.validateId(saleId);
  if (error.type) {
    return error;
  }

  await salesModel.deleteSale(saleId);
};

const updateSale = async (sales, id) => {
  const errorId = inputValidators.validateId(id);
  if (errorId.type) {
    return errorId;
  }
  const errorSales = inputValidators.validadeSales(sales);
  if (errorSales.type) {
    return errorSales;
  }
  
  await salesModel.updateSale(sales, id);
};

module.exports = {
  addSale,
  findAll,
  findById,
  deleteSale,
  saleIdExist,
  updateSale,
};