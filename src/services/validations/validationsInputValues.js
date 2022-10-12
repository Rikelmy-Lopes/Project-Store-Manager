const joiSchema = require('./schemas');

const validateId = (id) => {
  const { error } = joiSchema.idSchema.validate(id);
  if (error) {
     return { type: 'INVALID_VALUE', message: '"id" must be a number' };
  }

  return { type: null, message: '' };
};

const validadeNameProduct = (product) => {
  const { error } = joiSchema.nameSchema.validate(product.name);
  if (error) {
    return { type: 'INVALID_VALUE', message: '"name" must be a string' };
  }
  
  return { type: null, message: '' };
};

const validadeSales = (sales) => {
  const { error } = joiSchema.salesSchema.validate(sales);
  if (error) {
    return { type: 'INVALID_VALUE', message: '"sales" must be a array' };
  }
  return { type: null, message: '' };
};

module.exports = {
  validateId,
  validadeNameProduct,
  validadeSales,
};