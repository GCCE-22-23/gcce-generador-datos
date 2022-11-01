const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const TipoMatriculaConDescuento = sequelize.define('TipoMatriculaConDescuento', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    CURSO_ACA: {type: DataTypes.STRING, primaryKey: false},
    COD_PLAN: {type: DataTypes.STRING, primaryKey: false},
    COD_TIPO_MATRICUL: {type: DataTypes.INTEGER, primaryKey: false},
    TIPO_MATRICULA: {type: DataTypes.STRING, primaryKey: false},
})

module.exports = TipoMatriculaConDescuento
