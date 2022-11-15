import { DataTypes } from 'sequelize'
import { sequelize } from '../database/index.js';

export const preinscription = sequelize.define(
    'PREINSCRIPCION', {
    ID: { type: DataTypes.UUID, primaryKey: true },
    CURSO_ACA: { type: DataTypes.STRING, primaryKey: false },
    RAMA: { type: DataTypes.STRING, primaryKey: false },
    ISCED: { type: DataTypes.INTEGER, primaryKey: false},
    COD_PLAN: { type: DataTypes.STRING, primaryKey: false },
    CODIGO_MEC: { type: DataTypes.STRING, primaryKey: false },
    TITULACION: { type: DataTypes.STRING, primaryKey: false },
    CUPO: { type: DataTypes.STRING, primaryKey: false },
    MODALIDAD: { type: DataTypes.STRING, primaryKey: false },
    ESPECIALIDAD: { type: DataTypes.STRING, primaryKey: false },
    PREFERENCIA: { type: DataTypes.INTEGER, primaryKey: false },
    NOTA: { type: DataTypes.FLOAT, primaryKey: false },
    NOTA_ESP: { type: DataTypes.FLOAT, primaryKey: false },
    NOTA_ADM: { type: DataTypes.FLOAT, primaryKey: false },
}, {
    freezeTableName: true,
    timestamps: false
  });
