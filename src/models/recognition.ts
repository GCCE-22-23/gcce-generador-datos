import { DataTypes } from 'sequelize'
import { sequelize } from "../database/index.js"

export const Recognition = sequelize.define(
    'RECONOCIMIENTOS', 
    {
        ID: {
            type: DataTypes.UUID,
            primaryKey: true
          },
        COD_PLAN: {type: DataTypes.STRING, primaryKey: false},
        CRED: {type: DataTypes.INTEGER, primaryKey: false},
              
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

