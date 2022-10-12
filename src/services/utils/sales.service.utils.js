const utilsModel = require('../../models/utils/sales.model.utils');

const productIdExist = async (sales) => {
  const foundIds = [];
  const promises = sales.map(async (sale) => {
    const result = await utilsModel.productIdExist(sale.productId);
    if (result.length !== 0) {
      foundIds.push(true);
    }
  });
  await Promise.all(promises);
  if (foundIds.length === sales.length) return true;
  return false;
};

module.exports = {
  productIdExist,
};