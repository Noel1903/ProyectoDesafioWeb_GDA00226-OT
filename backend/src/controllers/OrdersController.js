const {createOrderCart, createOrderDetail, modifyOrderCart, cancelOrderCart, changeStateOrderCart, getOrders} = require('../models/OrdersModel');



const createOrder = async (req, res) => {
    const {id_user,id_client,id_state,nombre,direccion,telefono,correo,fecha_entregar, total_orden, products} = req.body;
    try {
        const response = await createOrderCart(id_user,id_client,id_state,nombre,direccion,telefono,correo,fecha_entregar, total_orden);
        products.forEach(async (product) => {
            await createOrderDetail(response, product.id_product, product.quantity, product.price);
        });
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al crear la orden'});
    }
}

const modifyOrder = async (req, res) => {
    const {id_order,id_state,nombre,direccion,telefono,correo,fecha_entregar, total_orden} = req.body;
    try {
        const response = await modifyOrderCart(id_order,id_state,nombre,direccion,telefono,correo,fecha_entregar, total_orden);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al modificar la orden'});
    }
}

const cancelOrder = async (req, res) => {
    const {id_order} = req.body;
    try {
        const response = await cancelOrderCart(id_order);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al cancelar la orden'});
    }
}

const changeStateOrder = async (req, res) => {
    const {id_order, id_state} = req.body;
    try {
        const response = await changeStateOrderCart(id_order, id_state);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al cambiar el estado de la orden'});
    }
}

const getOrdersUser = async (req, res) => {
    const {id_user} = req.body;
    try {
        const response = await getOrders(id_user);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al obtener las ordenes'});
    }
}

module.exports = {createOrder, modifyOrder, cancelOrder, changeStateOrder, getOrdersUser};