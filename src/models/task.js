const { DataTypes } = require('sequelize');

const sequelize = require('../database/config')

const Task = sequelize.define(
    'Task', {
        Titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        EstatusComplecion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        FechaEntrega: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Comentarios: {
            type: DataTypes.STRING,
            defaultValue: 'Sin comentarios'
        },
        Responsable: {
            type: DataTypes.STRING,
            defaultValue: 'Sin responsable'
        },
        Tags: {
            type: DataTypes.STRING,
            defaultValue: 'Sin tags'
        },
    },
    {
        timestamps: false,
    }    
);

module.exports = Task;