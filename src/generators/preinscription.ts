import { preinscription } from "../models/preinscription.js";
import { quotes, modalities, specialities } from "../data/preinscription.js";
import { degrees } from "../data/degrees.js"
import { getItemByHash, randomItemFromArray } from "./utils.js";
import { academicYear } from "../data/academic-years.js";

export function generatePreinscription(id: string) {
    const degree = getItemByHash(id, degrees)

    const preferencia = randomItemFromArray([1,2,3,4,5,6,7]) // del 1 al 7
    
    const modalidad = getItemByHash(id, modalities)
    const especialidad = getItemByHash(id, specialities[modalities.indexOf(modalidad)])
    const cupo = getItemByHash(id, quotes)
    const titulacion =  degree["TITULACION"][0]["TITULACION"]

    const multiplicadorEspecialidad = Number(process.env["GCCE_PREINSCRIPCION_MULTIPLICADOR_NOTA_ESPECIALIDAD_" + especialidad.toUpperCase()]) || 1
    const multiplicadorCupo = Number(process.env["GCCE_PREINSCRIPCION_MULTIPLICADOR_NOTA_CUPO_" + cupo.toUpperCase()]) || 1
    const multiplicadorTitulacion = Number(process.env["GCCE_PREINSCRIPCION_MULTIPLICADOR_NOTA_TITULACION_" + titulacion.toUpperCase()]) || 1

    const nota = Math.min(randomItemFromArray([1,2,3,4,5,6,7,8,9,10]) * multiplicadorCupo * multiplicadorEspecialidad * multiplicadorTitulacion, 10)
    const notaEsp =  Math.min(randomItemFromArray([1,2,3,4,5,6,7,8,9,10]) * multiplicadorCupo * multiplicadorEspecialidad * multiplicadorTitulacion, 10)

    const pre = preinscription.create({
        ID: id,
        CURSO_ACA: getItemByHash(id, academicYear),
        RAMA: degree["RAMA"],
        ISCED: degree["TITULACION"][0].COD_ISEC,
        COD_PLAN: `${degree["TITULACION"][0]["COD_PLAN"]}`,
        CODIGO_MEC: `${degree["TITULACION"][0]["COD_PLAN"]}`,
        TITULACION: titulacion,
        CUPO: cupo,
        MODALIDAD: modalidad,
        ESPECIALIDAD: especialidad,
        PREFERENCIA: preferencia,
        NOTA: nota,
        NOTA_ESP: notaEsp,
        NOTA_ADM: nota + notaEsp,
    })

    return pre
}
