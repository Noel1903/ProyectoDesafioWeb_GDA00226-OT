const {createCategory,newProduct,modifyCategory,modifyProducto} = require('../controllers/ProductsController');
const express = require('express');

const router = express.Router();

router.post('/create_category', createCategory);
router.post('/new_product', newProduct);
router.put('/modify_category', modifyCategory);
router.put('/modify_product', modifyProducto);

module.exports = router;