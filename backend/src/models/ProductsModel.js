const connectDatabase = require('../config/db.js')


const createCategoryProduct = async (name) => {
    try {
        const query = `EXEC createCategoriaProducto @nombre = '${name}'`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];
    }catch(error){
        console.error('Error al crear la categoria del producto', error);
    }
}



const createProduct = async (id_category, name, trademark, code,stock,state,price,photo) => {
//createProduct
    try{
        const query = `EXEC createProduct @categoriaProductos_idCategoriaProductos = ${id_category}, @nombre = '${name}', @marca = '${trademark}', @codigo = '${code}', @stock = ${stock}, @estados_idEstados = ${state}, @precio = ${price}, @foto = '${photo}'`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];

    }catch(error){
        console.error('Error al crear el producto', error);
    }
}

module.exports = { createCategoryProduct, createProduct };