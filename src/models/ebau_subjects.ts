import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const EnrolledSubject = sequelize.define('EBAU_MATERIA', {
  ID: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  CURSO_ACA: DataTypes.STRING,
  CONV: DataTypes.STRING,
  COD_MATERIA: DataTypes.STRING,
  MATERIA: DataTypes.STRING,
  FASE:  DataTypes.STRING,
  NOTA: DataTypes.INTEGER
}, {
  freezeTableName: true,
  timestamps: false
})