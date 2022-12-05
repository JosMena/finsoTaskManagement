const { request, response } = require('express');

const Task = require('../models/task');
const errorHandler = require('../utils/errorHandler');

const getAllTasks = async( req = request, res = response ) => {
    try {
        const [ total, description ] = await Promise.all([
            Task.count(),
            Task.findAll({
                attributes: [ 'Titulo', 'Descripcion' ]
            })
        ]);
        res.send({ total, description })
    } catch (error) {
        throw errorHandler('Bad Request', 400);
    }
}

const getTaskByID = async( req = request, res = response ) => {
    try {
        const { id } = req.params;
        const readTask = await Task.findByPk(id);
        res.send( readTask );
    } catch (error) {
        res.send('There is not a Task with that id');
        throw errorHandler('Not Found', 404);
    }
}

const postTask = async( req = request, res = response ) => {
    try {
        const { body } = req;
        const createTask = await Task.create( body );
        res.send( createTask );
    } catch (error) {
        throw errorHandler('Bad Request', 400);
    }
}

const putTask = async( req = request, res = response ) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const updateTask = await Task.findByPk(id);
        updateTask.update(body);
        res.send( updateTask );
    } catch (error) {
        res.send('There is not a Task with that id');
        throw errorHandler('Bad Request', 400);
    }
}

const deleteTask = async( req = request, res = response ) => {
    try {
        const { id } = req.params;
        const updateTask = await Task.findByPk(id);
        updateTask.destroy();
        res.send( updateTask );
    } catch (error) {
        res.send('There is not a Task with that id');
        throw errorHandler('Bad Request', 400);
    }
}

module.exports = {
    getAllTasks,
    getTaskByID,
    postTask,
    putTask,
    deleteTask,
}
