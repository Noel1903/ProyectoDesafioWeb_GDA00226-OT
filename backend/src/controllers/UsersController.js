const {createUserSystem, createClientSystem,modifyClientSystem,modifyUserSystem} = require('../models/UsersModel');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    const {id_rol,id_estado,email,name,password,phone,date_birth} = req.body;
    

    const encryptedPassword = await bcrypt.hash(password,10);
    const date = new Date();
    const result = await createUserSystem(id_rol,id_estado,email,name,encryptedPassword,phone,date_birth,date);
    res.json(result);
}


const modifyUser = async (req, res) => {
    const {id_usuario,id_rol,id_estado,email,name,password,phone,date_birth} = req.body;
    const encryptedPassword = await bcrypt.hash(password,10);
    const result = await modifyUserSystem(id_usuario,id_rol,id_estado,email,name,encryptedPassword,phone,date_birth);
    res.json(result);
}

const modifyClient = async (req, res) => {
    const {id_cliente,razon_social,nombre_comercial,direccion_entrega,telefono,email} = req.body;
    const result = await modifyClientSystem(id_cliente,razon_social,nombre_comercial,direccion_entrega,telefono,email);
    res.json(result);
}





const createClient = async (req, res) => {
    const {razon_social,nombre_comercial,direccion_entrega,telefono,email} = req.body;
    const result = await createClientSystem(razon_social,nombre_comercial,direccion_entrega,telefono,email);
    res.json(result);
}


module.exports = { createUser, createClient, modifyUser, modifyClient };
