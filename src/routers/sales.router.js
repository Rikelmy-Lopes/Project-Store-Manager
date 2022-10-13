const express = require('express');
const salesController = require('../controllers/sales.controller');
const { productIdExist, validadeProductId,
  validadeQuantity } = require('../middlewares/saleMiddlewares');

const router = express.Router();

router.post('/sales', validadeProductId, validadeQuantity, productIdExist,
  salesController.addSales);

router.get('/sales', salesController.listAllSales);

router.get('/sales/:id', salesController.listSalesById);

module.exports = router;