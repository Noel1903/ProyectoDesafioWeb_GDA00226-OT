const connectDatabase = require('../config/db.js')


const createOrderCart = async (id_user,id_client,id_state,nombre,direccion,telefono,correo,fecha_entregar, total_orden) => {
    try{
        const fecha = new Date()
        const query = `EXEC createOrder @usuarios_idUsuarios = ${id_user}, @clientes_idClientes = ${id_client}, @estados_idEstados = ${id_state},@fecha_creacion = '${fecha}', @nombre_completo = '${nombre}', @direccion = '${direccion}', @telefono = '${telefono}', @correo_electronico = '${correo}', @fecha_entregar = '${fecha_entregar}', @total_orden = ${total_orden}`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];

    }catch(error){
        console.error('Error al crear la orden', error);
    }

}

const createOrderDetail = async (id_order, id_product, quantity, price) => {
    try{
        const query = `EXEC createOrderDetails @orden_idOrdenes = ${id_order}, @productos_idProductos = ${id_product}, @cantidad = ${quantity}, @precio = ${price}, @subtotal = ${quantity*price}`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];

    }catch(error){
        console.error('Error al crear el detalle de la orden', error);
    }
}

const modifyOrderCart = async (id_order,id_state,nombre,direccion,telefono,correo,fecha_entregar, total_orden) => {
    try{
        const query = `EXEC modifyOrden @idOrden = ${id_order}, @estados_idEstados = ${id_state}, @nombre_completo = '${nombre}', @direccion = '${direccion}', @telefono = '${telefono}', @correo_electronico = '${correo}', @fecha_entregar = '${fecha_entregar}', @total_orden = ${total_orden}`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];

    }catch(error){
        console.error('Error al modificar la orden', error);
    }
}

const cancelOrderCart = async (id_order) => {
    try{
        const query = `EXEC cancelarOrden @idOrden = ${id_order}`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];

    }catch(error){
        console.error('Error al cancelar la orden', error);
    }
}

const changeStateOrderCart = async (id_order, id_state) => {
    try{
        const query = `EXEC cambiarEstadoOrden @idOrden = ${id_order}, @estado = ${id_state}`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'][0][''];

    }catch(error){
        console.error('Error al cambiar el estado de la orden', error);
    }
}


const getOrders = async (id_user) => {  
    try {
        const query = `SELECT * FROM Ordenes WHERE usuarios_idUsuarios = ${id_user}`;
        const pool = await connectDatabase();
        const result = await pool.request().query(query);
        pool.close();
        return result['recordset'];

    }catch(error){
        console.error('Error al obtener las ordenes', error);
    }
}


module.exports = { createOrderCart, createOrderDetail, modifyOrderCart, cancelOrderCart, changeStateOrderCart, getOrders };
    