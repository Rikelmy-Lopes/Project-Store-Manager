const connection = require('./connecttion');

const addSale = async (sales) => {
    const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.sales (date)
    VALUE(now())`,
    );
  
  const promises = sales.map(async (sale) => {
    await connection.execute(
      `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUE(?, ?, ?)`,
      [insertId, sale.productId, sale.quantity],
    );
  });
  
  await Promise.all(promises);

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

const saleIdExist = async (saleId) => {
  const [[result]] = await connection.execute(
    `SELECT * FROM StoreManager.sales
    WHERE id = ?`,
    [saleId],
  );
  return result || {};
};

const deleteSale = async (saleId) => {
  await connection.execute(
    `DELETE FROM StoreManager.sales
     WHERE id = ?`,
    [saleId],
  );
};

const updateSale = async (sales, id) => {
  const promises = sales.map(async (sale) => {
    await connection.execute(
      `UPDATE StoreManager.sales_products
       SET quantity = ?
       WHERE sale_id = ?
       AND product_id = ?`,
      [sale.quantity, id, sale.productId],
    );
  });
  await Promise.all(promises);
};

module.exports = {
  addSale,
  findAll,
  findById,
  deleteSale,
  saleIdExist,
  updateSale,
};