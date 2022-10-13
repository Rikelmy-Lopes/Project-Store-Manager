const connection = require('./connecttion');

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.products
     ORDER BY id ASC`,
);

  return result;
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    `SELECT * FROM StoreManager.products
    WHERE id = ?`,
    [productId],
  );
  return result;
};

const addProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (name) 
     VALUE(?)`,
    [product.name],
  );
  
  return insertId;
};

const productIdExist = async (productId) => {
  const [[result]] = await connection.execute(
    `SELECT * FROM StoreManager.products
    WHERE id = ?`,
    [productId],
  );
  return result || {};
};

const updateProduct = async (product, id) => {
  await connection.execute(
    `UPDATE StoreManager.products
     SET name = ?
     WHERE id = ?`,
    [product.name, id],
  );
};

module.exports = {
  findAll,
  findById,
  addProduct,
  productIdExist,
  updateProduct,
};