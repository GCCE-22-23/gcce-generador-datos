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
  NOTA_BACH: DataTypes.INTEGER,
  NOTA_PRUE:  DataTypes.INTEGER,
  NOTA_DEF: DataTypes.INTEGER
}, {
  freezeTableName: true,
  timestamps: false
})
