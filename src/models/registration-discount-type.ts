import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const RegistrationDiscountType = sequelize.define('TIPO_MATRICULA_CON_DESCUENTO', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  CURSO_ACA: DataTypes.STRING,
  COD_PLAN: DataTypes.STRING,
  COD_TIPO_MATRICUL: DataTypes.INTEGER,
  TIPO_MATRICULA:  DataTypes.STRING,
}, {
  freezeTableName: true,
  timestamps: false
})
