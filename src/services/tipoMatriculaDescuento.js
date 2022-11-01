const { conexion } = require('../config/database.js');
const TipoMatriculaConDescuento = require('../models/TipoMatriculaDescuento');
const { randomItemFromArray, randomIntFromInterval } = require('../utils/utils')
const data = require('../config/data')

function generateTipoMatriculaConDescuento(id) {
    return TipoMatriculaConDescuento.create({
        ID: id,
        CURSO_ACA: randomItemFromArray(data.academicYear),
        COD_PLAN: randomItemFromArray(data.curriculumCode),
        COD_TIPO_MATRICUL: randomIntFromInterval(0, 5),
        TIPO_MATRICULA: randomItemFromArray(data.subject)
    })

}

module.exports = {
    generateTipoMatriculaConDescuento
}