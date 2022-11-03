
const { sequelize } = require('../config/database');

const Preinscripcion = sequelize.define(
    'Preinscripcion', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    curso_aca: { type: DataTypes.STRING, primaryKey: false },
    rama: { type: DataTypes.INTEGER, primaryKey: false },
    isced: { type: DataTypes.INTEGER, primaryKey: false},
    cod_plan: { type: DataTypes.STRING, primaryKey: false },
    codigo_mec: { type: DataTypes.STRING, primaryKey: false },
    titulacion: { type: DataTypes.STRING, primaryKey: false },
    cupo: { type: DataTypes.STRING, primaryKey: false },
    modalidad: { type: DataTypes.STRING, primaryKey: false },
    especialidad: { type: DataTypes.STRING, primaryKey: false },
    preferencia: { type: DataTypes.INTEGER, primaryKey: false },
    nota: { type: DataTypes.INTEGER, primaryKey: false },
    nota_esp: { type: DataTypes.INTEGER, primaryKey: false },
    nota_adm: { type: DataTypes.INTEGER, primaryKey: false },
}
);

module.exports = Preinscripcion