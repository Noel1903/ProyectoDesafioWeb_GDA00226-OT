const connectDatabase = require('../config/db.js')
const bcrypt = require('bcrypt');

const LoginUser = async (email,password) => {
    try {
        const query = `SELECT * FROM Usuarios WHERE correo_electronico = '${email}'`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();

        if(result['recordset'].length === 0){
            return 'Usuario no encontrado';
        }
        //Comparamos la contraseña
        const user = result['recordset'][0];
        const match = await bcrypt.compare(password, user.password);
        if(!match){
            return 'La contraseña no coincide';
        }
        const response = {
            success: true,
            idUsuarios: user.idUsuarios,
            idRol: user.idRol,
            idEstado: user.idEstado,
        }
        return response;
        

    }catch(error){
        const response = {
            success: false,
            message: 'Error al iniciar sesion'
        }
        console.error('Error al iniciar sesion', error);
        return response;
    }
}

module.exports = {LoginUser};

