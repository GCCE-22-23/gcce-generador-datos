const Preinscripcion = require("../models/Preinscripcion");
const { conexion } = require('../config/database.js');
const { randomIntFromInterval } = require("../utils/utils");
const { titles } = require('../config/data')

async function createPreinscripcion(pre) {
    let sql = `INSERT INTO Preinscripcion (curso_aca, rama, isced, cod_plan, codigo_mec, titulacion, cupo, modalidad, especialidad, preferencia, nota, nota_esp, nota_adm) VALUES (?)`
    await conexion.query(sql, [pre], function (err, result) {
        if (err) throw err;
        console.log("(Preinscripcion) : Number of records inserted: " + result.affectedRows);
    });
}

function generatePreinscripcion(id) {

    // Constantes TODO: Mover a data.js
    const especialidades = [
        ["Bach. Ciencias", "Bach. Humanidades", "Bach. Artes"],
        ["FP Ciencias", "FP Humanidades", "FP Arte"],
        ["Mayores 25", "Mayores 40", "Extranjeros"]
    ]
    const modalidades = ["BAC", "FP", "EXT"]
    const cupos = ["General", "Titulados", "Deportistas", "Mayores 25", "Discapacitados", "Mayores 40", "Mayores 45"]

    // Valores
    const curso = randomIntFromInterval(2010, 2021)// 2010-2021
    const rama = randomIntFromInterval(1, 5) // Artes y humanidades, Ciencias, Humanidades, Ingenieria, Salud
    const isced = randomIntFromInterval(0, 8) // Preescolar (temprana), Preescolar(preescolar), Primaria, Secundaria, Bachiller, FP Medio, FP Superios, Grado, Master, Doctorado

    const cod_plan = 0
    const condigo_mec = 0
    const titulacion = titles[randomIntFromInterval(0, titles.length)]

    const cupo = cupos[randomIntFromInterval(0, cupos.length)]
    const modalidad = modalidades[randomIntFromInterval(0, modalidades.length)]
    const especialidad = especialidades[modalidad][randomIntFromInterval(0, especialidades.length)]
    const preferencia = randomIntFromInterval(1, 7) // del 1 al 7

    const nota = randomIntFromInterval(1, 10)
    const notaEsp = randomIntFromInterval(1, 10)


    const pre = Preinscripcion.create({
        id,
        curso_aca: `${curso}-${curso + 1}`,
        rama: rama,
        isced: isced,
        cod_plan: cod_plan,
        codigo_mec: condigo_mec,
        titulacion: titulacion,
        cupo: `${cupo}`,
        modalidad: modalidad,
        especialidad: especialidad,
        preferencia: preferencia,
        nota: nota,
        nota_esp: notaEsp,
        nota_adm: nota + notaEsp,
    })

    createPreinscripcion(pre)
    return pre
}
module.exports = { generatePreinscripcion }