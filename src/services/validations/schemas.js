const Joi = require('joi');

const idSchema = Joi.number().integer().min(0).required();
const nameSchema = Joi.string().required();

module.exports = {
  idSchema,
  nameSchema,
};