const {createCategoryProduct, createProduct,modifyCategoryProduct,modifyProduct} = require('../models/ProductsModel');

const createCategory = async (req, res) => {
    const {name} = req.body;
    try {
        const response = await createCategoryProduct(name);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al crear la categoría del producto'});
    }
}

const modifyCategory = async (req, res) => {
    const {id_category, name} = req.body;
    try {
        const response = await modifyCategoryProduct(id_category, name);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al modificar la categoría del producto'});
    }
}

const newProduct = async (req,res) => {
    const {id_category, name, trademark, code,stock,state,price,photo} = req.body;
    try {
        const response = await createProduct(id_category, name, trademark, code,stock,state,price,photo);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al crear el producto'});
    }
}


const modifyProducto = async (req,res) => {
    const {id_product, id_category, name, trademark, code,stock,state,price,photo} = req.body;
    try {
        const response = await modifyProduct(id_product, id_category, name, trademark, code,stock,state,price,photo);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al modificar el producto'});
    }
}


module.exports = { createCategory, newProduct,modifyCategory,modifyProducto };