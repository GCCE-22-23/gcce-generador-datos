import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const EnrolledSubject = sequelize.define('ASIGNATURAS_MATRICULADAS', {
  ID: {
     type: DataTypes.UUID,
      primaryKey: true
  },
  CURSO_ACA: DataTypes.STRING,
  COD_PLAN: DataTypes.STRING,
  COD_ASIGNATURA: { 
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  ASIGNATURA: DataTypes.STRING,
  TIPOLOGIA:  DataTypes.STRING,
}, {
  freezeTableName: true,
  timestamps: false
})
