
const { sequelize } = require('../config/database');

const LineaDeActas = sequelize.define(
    'Lineas de Actas', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    cod_plan: { type: DataTypes.STRING, primaryKey: false },
    cod_asign: { type: DataTypes.INTEGER, primaryKey: true },
    asignatura: { type: DataTypes.STRING, primaryKey: true },
    conv: { type: DataTypes.STRING, primaryKey: true },
    calif_numerica: { type: DataTypes.STRING, primaryKey: true },
    calif: { type: DataTypes.STRING, primaryKey: false },
}
);

module.exports = LineaDeActas
