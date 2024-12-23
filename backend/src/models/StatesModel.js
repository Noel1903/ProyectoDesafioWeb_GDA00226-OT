const connectDatabase = require('../config/db.js')


const createState = async (name) => {

    try {
        const query = `EXEC createState @Nombre = '${name}'`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];
    }catch(error){
        console.error('Error al crear el estado', error);
    }
}

const modifyState = async (id_state, name) => {
    try{
        const query = `EXEC modifyEstado @idEstados = ${id_state}, @nombre = '${name}'`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];  

    }catch(error){
        console.error('Error al modificar el estado', error);
    }
}

const deleteState = async (id_state) => {
    try{
        const query = `DELETE FROM Estados WHERE idEstados = ${id_state}`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];

    }catch(error){
        console.error('Error al eliminar el estado', error);
    }
}

const getStates = async () => {
    try {
        const query = `SELECT * FROM Estados`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'];

    }catch(error){
        console.error('Error al obtener los estados', error);
    }
}


module.exports = {createState, modifyState, deleteState, getStates};