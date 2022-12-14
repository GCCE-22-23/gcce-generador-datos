import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const EbauSubject = sequelize.define('EBAU_MATERIA', {
  ID: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  CURSO_ACA: DataTypes.STRING,
  CONV: DataTypes.STRING,
  COD_MATERIA: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  MATERIA: DataTypes.STRING,
  FASE:  DataTypes.STRING,
  NOTA: DataTypes.FLOAT
}, {
  freezeTableName: true,
  timestamps: false
})
