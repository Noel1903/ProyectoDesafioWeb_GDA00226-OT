const {createCategoryProduct, createProduct} = require('../models/ProductsModel');

const createCategory = async (req, res) => {
    const {name} = req.body;
    try {
        const response = await createCategoryProduct(name);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al crear la categoría del producto'});
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


module.exports = { createCategory, newProduct };