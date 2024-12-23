const {createOrder,modifyOrder,cancelOrder,changeStateOrder,getOrdersUser} = require('../controllers/OrdersController');

const express = require('express'); 
const router = express.Router();

router.post('/createOrder', createOrder);
router.put('/modifyOrder', modifyOrder);
router.delete('/cancelOrder', cancelOrder);
router.put('/changeStateOrder', changeStateOrder);
router.get('/getOrdersUser', getOrdersUser);

module.exports = router;



