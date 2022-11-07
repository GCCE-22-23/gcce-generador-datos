import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const EnrolledSubject = sequelize.define('EBAU_MATERIA', {
  ID: {
    type: DataTypes.INTEGER,
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