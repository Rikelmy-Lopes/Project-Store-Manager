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

module.exports = {
  addSale,
};