const Joi = require('joi');

const idSchema = Joi.number().integer().min(0).required();

module.exports = {
  idSchema,
};