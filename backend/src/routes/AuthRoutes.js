const express = require('express');
const router = express.Router();

const {loginUser} = require('../controllers/AuthController');
const {validateToken} = require('../middleware/AuthModel');


router.post('/login', loginUser);

router.get('/validateToken', validateToken, (req, res) => {
    res.status(200).json({message: 'Token valido', id_user: req.user.idUsuarios, id_rol: req.user.idRol, id_state: req.user.idEstado});
});


module.exports = router;