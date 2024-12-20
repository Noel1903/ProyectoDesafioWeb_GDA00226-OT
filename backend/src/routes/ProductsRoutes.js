const {createCategory,newProduct} = require('../controllers/ProductsController');
const express = require('express');

const router = express.Router();

router.post('/create_category', createCategory);
router.post('/new_product', newProduct);

module.exports = router;