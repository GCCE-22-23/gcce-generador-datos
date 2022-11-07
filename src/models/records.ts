import { DataTypes } from 'sequelize'
import { sequelize } from '../database/index.js';

export const Record = sequelize.define(
    'LINEAS_DE_ACTAS', {
    ID: { type: DataTypes.UUID, primaryKey: true },
    COD_PLAN: DataTypes.STRING,
    COD_ASIGN: { type: DataTypes.INTEGER, primaryKey: true },
    ASIGNATURA: DataTypes.STRING,
    CONV: { type: DataTypes.STRING, primaryKey: true },
    CALIF_NUMERICA: DataTypes.STRING,
    CALIF: DataTypes.STRING
}, {
  freezeTableName: true,
  timestamps: false
})
