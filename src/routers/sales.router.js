const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validadeProductId, validadeQuantity } = require('../middlewares/saleMiddlewares');
const { productsIdsExist } = require('../middlewares/productMiddlewares');

const router = express.Router();

router.post('/sales', validadeProductId, validadeQuantity, productsIdsExist,
  salesController.addSales);

router.get('/sales', salesController.listAllSales);

router.get('/sales/:id', salesController.listSalesById);

module.exports = router;