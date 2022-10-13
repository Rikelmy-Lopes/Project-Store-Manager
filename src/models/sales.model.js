const connection = require('./connecttion');

const addSale = async (sales) => {
    const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.sales (date)
    VALUE(now())`,
    );
  
  sales.forEach(async (sale) => {
    await connection.execute(
      `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUE(?, ?, ?)`,
      [insertId, sale.productId, sale.quantity],
    );
  });
  return insertId;
};

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT sale_id AS saleId, date, product_id AS productId, quantity 
     FROM StoreManager.sales_products AS sales_products
     INNER JOIN StoreManager.sales AS sales
     ON sales_products.sale_id = sales.id
     ORDER BY sale_id ASC, product_id ASC`,
  );
  return result;
};

const findById = async (id) => {
  const [result] = await connection.execute(
    `SELECT date, product_id AS productId, quantity 
     FROM StoreManager.sales_products AS sales_products
     INNER JOIN StoreManager.sales AS sales
     ON sales_products.sale_id = sales.id
     WHERE sale_id = ?
     ORDER BY sale_id ASC, product_id ASC`,
    [id],
  );
  return result.length > 1 ? result : result[0];
};

module.exports = {
  addSale,
  findAll,
  findById,
};