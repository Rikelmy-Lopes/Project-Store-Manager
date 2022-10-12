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

module.exports = {
  addSale,
};