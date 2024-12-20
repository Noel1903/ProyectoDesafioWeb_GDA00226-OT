const connectDatabase = require('../config/db.js')

const createUserSystem = async (id_rol,email,name,password,phone,date_birth) => {
    try {
        const query = `EXEC createUser @rol_idRol = ${id_rol}, @correo_electronico = '${email}', @nombre_completo = '${name}', @password = '${password}', @telefono = '${phone}', @fecha_nacimiento = '${date_birth}'`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];
    }catch(error){
        console.error('Error al crear el usuario', error);
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




module.exports = { createUserSystem, createClientSystem };