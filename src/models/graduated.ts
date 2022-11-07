import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const Graduated = sequelize.define(
    'EGRESADOS', 
    {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true
          },
        CURSO_ACA: {type: DataTypes.STRING, primaryKey: false},
        COD_PLAN: {type: DataTypes.STRING, primaryKey: false},
        CONV: {type: DataTypes.STRING, primaryKey: false},
        NOTA_NUMERICA: {type: DataTypes.FLOAT, primaryKey: false},
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

