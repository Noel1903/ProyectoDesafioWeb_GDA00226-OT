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

const modifyCategoryProduct = async (id_category, name) => {
    try{
        const query = `EXEC modifyCategoriaProducto @idCategoriaProductos = ${id_category}, @nombre = '${name}'`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];  

    }catch(error){
        console.error('Error al modificar la categoria del producto', error);
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

const modifyProduct = async (id_product, id_category, name, trademark, code,stock,state,price,photo) => {
    try{
        const query = `EXEC modifyProduct @idProductos = ${id_product}, @categoriaProductos_idCategoriaProductos = ${id_category}, @nombre = '${name}', @marca = '${trademark}', @codigo = '${code}', @stock = ${stock}, @estados_idEstados = ${state}, @precio = ${price}, @foto = '${photo}'`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];

    }catch(error){
        console.error('Error al modificar el producto', error);
    }
}

const deleteProduct = async (id_product) => {
    try{
        const query = `DELETE FROM Productos WHERE idProductos = ${id_product}`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];


    }catch(error){
        console.error('Error al eliminar el producto', error);
    }
}


const deleteCategoryProduct = async (id_category) => {
    try{
        const query = `DELETE FROM CategoriaProductos WHERE idCategoriaProductos = ${id_category}`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];
    }catch(error){
        console.error('Error al eliminar la categoria del producto', error);
    }


}

const getProducts = async () => {
    try{
        const query = `SELECT * FROM Productos`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'];
    }catch(error){
        console.error('Error al obtener los productos', error);
    }
}


const getCategoriesProducts = async () => {
    try{
        const query = `SELECT * FROM CategoriaProductos`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'];
    }catch(error){
        console.error('Error al obtener las categorias de productos', error);
    }
}

module.exports = { createCategoryProduct, createProduct, modifyCategoryProduct, modifyProduct, deleteProduct, deleteCategoryProduct, getProducts, getCategoriesProducts };