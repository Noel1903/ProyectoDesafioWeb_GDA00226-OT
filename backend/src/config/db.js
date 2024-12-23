const mssql = require('mssql');
require('dotenv').config();

const config = {
    server : process.env.DB_SERVER,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }

}

const connectDatabase = async () => {
    try {
        const pool = await mssql.connect(config);
        console.log('Conexión exitosa a la base de datos');
        return pool;
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
    }
}

module.exports = connectDatabase;