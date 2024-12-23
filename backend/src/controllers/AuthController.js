const {LoginUser} = require('../models/AuthModel.js');
const jwt = require('jsonwebtoken');

const secret_key = process.env.SECRET_KEY;

const loginUser = async (req, res) => {
    const {email,password} = req.body;
    const result = await LoginUser(email,password);
    if(!result.success){
        return res.status(401).send(result);
    }
    const token = jwt.sign({
        id_user: result.idUsuarios,
        id_rol: result.idRol,
        id_state: result.idEstado
        
    },
    secret_key,
    {
        expiresIn: '24h'
    });

    res.status(200).send({token});
}

module.exports = {loginUser};