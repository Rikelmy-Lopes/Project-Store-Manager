const Joi = require('joi');

const idSchema = Joi.number().integer().min(0).required();
const nameSchema = Joi.string().required();
const salesSchema = Joi.array().required();

module.exports = {
  idSchema,
  nameSchema,
  salesSchema,
};