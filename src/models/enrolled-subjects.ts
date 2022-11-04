import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const RegistrationDiscountType = sequelize.define('ASIGNATURAS_MATRICULADAS', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  CURSO_ACA: DataTypes.STRING,
  COD_PLAN: DataTypes.STRING,
  COD_ASIGNATURA: DataTypes.INTEGER,
  ASIGNATURA: DataTypes.STRING,
  TIPOLOGÍA:  DataTypes.STRING,
}, {
  freezeTableName: true,
  timestamps: false
})
