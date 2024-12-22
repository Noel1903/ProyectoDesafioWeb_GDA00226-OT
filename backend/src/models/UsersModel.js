const connectDatabase = require('../config/db.js')

const createUserSystem = async (id_rol,id_state,email,name,password,phone,date_birth,date) => {
    try {
        const query = `EXEC createUser @rol_idRol = ${id_rol},@estado_idEstados = '${id_state}', @correo_electronico = '${email}', @nombre_completo = '${name}', @password = '${password}', @telefono = '${phone}', @fecha_nacimiento = '${date_birth} ,@fecha_creacion = '${date}'`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];
    }catch(error){
        console.error('Error al crear el usuario', error);
    }
}


const modifyUserSystem = async (id_usuario,id_rol,id_estado,email,name,password,phone,date_birth,date) => {
    try {
        const query = `EXEC modifyUser @idUsuarios = ${id_usuario}, @rol_idRol = ${id_rol},@estados_idEstados = '${id_estado}', @correo_electronico = '${email}', @nombre_completo = '${name}', @password = '${password}', @telefono = '${phone}', @fecha_nacimiento = '${date_birth}`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];
    }catch(error){
        console.error('Error al modificar el usuario', error);
    }
}

const createClientSystem = async (razon_social,nombre_comercial,direccion_entrega,telefono,email) => {
    try {
        const query = `EXEC createClient @RazonSocial = '${razon_social}', @Nombre_Comercial = '${nombre_comercial}', @Direccion_Entrega = '${direccion_entrega}', @Telefono = '${telefono}', @Email = '${email}'`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];
    }catch(error){
        console.error('Error al crear el cliente', error);
    }
}


const modifyClientSystem = async (id_cliente,razon_social,nombre_comercial,direccion_entrega,telefono,email) => {
    try {
        const query = `EXEC modifyClient @idClientes = ${id_cliente}, @razon_social = '${razon_social}', @nombre_comercial = '${nombre_comercial}', @direccion_entrega = '${direccion_entrega}', @telefono = '${telefono}', @email = '${email}'`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];
    }catch(error){
        console.error('Error al modificar el cliente', error);
    }
}   


const blockUserSystem = async (id_usuario) => {
    try {
        const query = `EXEC bloquearUsuario @idUser = ${id_usuario}`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];
    }catch(error){
        console.error('Error al bloquear el usuario', error);
    }
}

const getUsers = async () => {
    try {
        const query = `SELECT * FROM Usuarios`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'];
    }catch(error){
        console.error('Error al obtener los usuarios', error);
    }
}


module.exports = { createUserSystem, createClientSystem, modifyUserSystem, modifyClientSystem, blockUserSystem, getUsers };