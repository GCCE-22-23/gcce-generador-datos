import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const Registration = sequelize.define(
  "MATRICULA",
  {
    ID: { type: DataTypes.INTEGER, primaryKey: true },
    CURSO_ACA: { type: DataTypes.STRING, primaryKey: true },
    RAMA: DataTypes.INTEGER,
    COD_AMBITO_ISCED: DataTypes.STRING,
    COD_PLAN: DataTypes.STRING,
    CODIGO_MEC: DataTypes.STRING,
    TITULACION: DataTypes.STRING,
    SEXO: DataTypes.STRING,
    ANIO_NAC: DataTypes.INTEGER,
    NACIONALIDAD: DataTypes.STRING,
    PROVINCIA: DataTypes.INTEGER,
    MUNICIPIO: DataTypes.INTEGER,
    NUES: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);
