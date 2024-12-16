const mssql = require('mssql');
require('dotenv').config();

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
}

const connectDatabase = async () => {
    try {
        await mssql.connect(config);
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error al conectar a la base de datos', error);
    }
}

module.exports = connectDatabase;