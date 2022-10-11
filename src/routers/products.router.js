const express = require('express');
const productsController = require('../controllers/products.controller');
const { validadeNameProduct } = require('../middlewares/productMiddlewares');

const router = express.Router();

router.get('/products', productsController.listAllProducts);

router.get('/products/:id', productsController.listProductById);

router.post('/products', validadeNameProduct, productsController.addProduct);

module.exports = router;