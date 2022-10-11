const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/products', productsController.listAllProducts);

router.get('/products/:id', productsController.listProductById);

module.exports = router;