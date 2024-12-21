const {createEstado,modifyEstado,deleteEstado,getEstados} = require('../controllers/StatesController.js');

const express = require('express');
const router = express.Router();

router.post('/createEstado', createEstado);
router.put('/modifyEstado', modifyEstado);
router.delete('/deleteEstado', deleteEstado);
router.get('/getEstados', getEstados);

module.exports = router;

