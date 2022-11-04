
import { DataTypes } from 'sequelize'
const { sequelize } = require('../config/database');

export const preinscription = sequelize.define(
    'PREINSCRIPCION', {
    ID: { type: DataTypes.UUIDV4, primaryKey: true },
    CURSO_ACA: { type: DataTypes.STRING, primaryKey: false },
    RAMA: { type: DataTypes.INTEGER, primaryKey: false },
    ISCED: { type: DataTypes.INTEGER, primaryKey: false},
    COD_PLAN: { type: DataTypes.STRING, primaryKey: false },
    CODIGO_MEC: { type: DataTypes.STRING, primaryKey: false },
    TITULACION: { type: DataTypes.STRING, primaryKey: false },
    CUPO: { type: DataTypes.STRING, primaryKey: false },
    MODALIDAD: { type: DataTypes.STRING, primaryKey: false },
    ESPECIALIDAD: { type: DataTypes.STRING, primaryKey: false },
    PREFERENCIA: { type: DataTypes.INTEGER, primaryKey: false },
    NOTA: { type: DataTypes.NUMBER, primaryKey: false },
    NOTA_ESP: { type: DataTypes.NUMBER, primaryKey: false },
    NOTA_ADM: { type: DataTypes.NUMBER, primaryKey: false },
}
);