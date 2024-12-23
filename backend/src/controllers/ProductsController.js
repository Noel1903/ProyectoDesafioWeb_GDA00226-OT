const {createCategoryProduct, createProduct,modifyCategoryProduct,modifyProduct,deleteCategoryProduct,deleteProduct,getCategoriesProducts,getProducts} = require('../models/ProductsModel');

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


const deleteCategoria = async (req, res) => {
    const {id_category} = req.body;
    try {
        const response = await deleteCategoryProduct(id_category);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al eliminar la categoría del producto'});
    }
}

const deleteProducto = async (req, res) => {
    const {id_product} = req.body;
    try {
        const response = await deleteProduct(id_product);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al eliminar el producto'});
    }
}

const getCategorias = async (req, res) => {
    try {
        const response = await getCategoriesProducts();
        res.status(200).json({data: response});
    } catch (error) {
        res.status(500).json({error: 'Error al obtener las categorías de productos'});
    }
}

const getProductos = async (req, res) => {
    try {
        const response = await getProducts();
        res.status(200).json({data: response});
    } catch (error) {
        res.status(500).json({error: 'Error al obtener los productos'});
    }
}

module.exports = { createCategory, newProduct,modifyCategory,modifyProducto,deleteCategoria,deleteProducto,getCategorias,getProductos };