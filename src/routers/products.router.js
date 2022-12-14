const express = require('express');
const productsController = require('../controllers/products.controller');
const { validadeNameProduct, productIdExist } = require('../middlewares/productMiddlewares');

const router = express.Router();

router.get('/products', productsController.listAllProducts);

router.get('/products/search', productsController.searchProduct);

router.get('/products/:id', productsController.listProductById);

router.post('/products', validadeNameProduct, productsController.addProduct);

router.put('/products/:id', productIdExist, validadeNameProduct, productsController.updateProduct);

router.delete('/products/:id', productIdExist, productsController.deleteProduct);

module.exports = router;