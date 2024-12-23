const {createState, modifyState, deleteState, getStates} = require('../models/StatesModel.js');

const createEstado = async (req, res) => {
    const {name} = req.body;
    try {
        const response = await createState(name);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al crear el estado'});
    }
}


const modifyEstado = async (req, res) => {
    const {id_state, name} = req.body;
    try {
        const response = await modifyState(id_state, name);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al modificar el estado'});
    }
}


const deleteEstado = async (req, res) => {
    const {id_state} = req.body;
    try {
        const response = await deleteState(id_state);
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al eliminar el estado'});
    }
}


const getEstados = async (req, res) => {
    try {
        const response = await getStates();
        res.status(200).json({message: response});
    } catch (error) {
        res.status(500).json({error: 'Error al obtener los estados'});
    }
}


module.exports = {createEstado, modifyEstado, deleteEstado, getEstados};