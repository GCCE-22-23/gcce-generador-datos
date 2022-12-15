import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const RegistrationDiscountType = sequelize.define('TIPO_MATRICULA_CON_DESCUENTO', {
  ID: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  CURSO_ACA: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  COD_PLAN: DataTypes.STRING,
  COD_TIPO_MATRICUL: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  TIPO_MATRICULA: DataTypes.STRING,
}, {
  freezeTableName: true,
  timestamps: false
})
