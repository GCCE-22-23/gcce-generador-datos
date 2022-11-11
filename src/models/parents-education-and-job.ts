import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const ParentsEducationAndJob = sequelize.define('FORMACION_Y_OCUPACION_DE_LOS_FAMILIARES', {
  ID: {
     type: DataTypes.UUID
,
    primaryKey: true
  },
  CURSO_ACA: DataTypes.STRING,
  COD_VARIABLE: DataTypes.STRING,
  VALOR: DataTypes.STRING
})
