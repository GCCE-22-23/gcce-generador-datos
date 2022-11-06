import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const Transfers = sequelize.define(
    'TRASLADOS', 
    {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true
          },
        CURSO_ACA: {type: DataTypes.STRING, primaryKey: false},
        COD_PLAN: {type: DataTypes.STRING, primaryKey: false},
        TRASLADO: {type: DataTypes.STRING, primaryKey: false},
        UNIV_TRAS: {type: DataTypes.STRING, primaryKey: false},
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

