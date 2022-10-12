const connection = require('../connecttion');

const productIdExist = async (id) => {
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.products
    WHERE id = ?`,
    [id],
  );
  return result;
};

module.exports = {
productIdExist,
};