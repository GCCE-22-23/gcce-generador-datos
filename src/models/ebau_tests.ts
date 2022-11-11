import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const EbauTest = sequelize.define('EBAU_PRUEBA', {
  ID: {
     type: DataTypes.UUID
,
    primaryKey: true
  },
  CURSO_ACA: DataTypes.STRING,
  CONV: DataTypes.STRING,
  ESPECIALIDAD: DataTypes.STRING,
  NOTA_BACH: DataTypes.FLOAT,
  NOTA_PRUE:  DataTypes.FLOAT,
  NOTA_DEF: DataTypes.FLOAT
}, {
  freezeTableName: true,
  timestamps: false
})
