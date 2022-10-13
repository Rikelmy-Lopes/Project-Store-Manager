const express = require('express');
const salesController = require('../controllers/sales.controller');
const { validadeProductId, validadeQuantity,
  saleIdExist } = require('../middlewares/saleMiddlewares');
const { productsIdsExist } = require('../middlewares/productMiddlewares');

const router = express.Router();

router.post('/sales', validadeProductId, validadeQuantity, productsIdsExist,
  salesController.addSales);

router.get('/sales', salesController.listAllSales);

router.get('/sales/:id', salesController.listSalesById);

router.delete('/sales/:id', saleIdExist, salesController.deleteSale);

router.put('/sales/:id', validadeProductId, validadeQuantity, productsIdsExist, saleIdExist,
  salesController.updateSale);

module.exports = router;