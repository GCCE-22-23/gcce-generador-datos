import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const Registration = sequelize.define(
  "MATRICULA",
  {
    ID: {  type: DataTypes.UUID
, primaryKey: true },
    CURSO_ACA: { type: DataTypes.STRING, primaryKey: true },
    RAMA: DataTypes.INTEGER,
    COD_AMBITO_ISCED: DataTypes.STRING,
    COD_PLAN: DataTypes.STRING,
    CODIGO_MEC: DataTypes.STRING,
    TITULACION: DataTypes.STRING,
    SEXO: DataTypes.STRING,
    ANIO_NAC: DataTypes.INTEGER,
    NACIONALIDAD: DataTypes.STRING,
    PROVINCIA: DataTypes.STRING,
    MUNICIPIO: DataTypes.STRING,
    NUES: DataTypes.BOOLEAN,
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
