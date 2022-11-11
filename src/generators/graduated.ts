

import { Graduated } from "../models/graduated.js";
import { degrees } from "../data/degrees.js"
import { getItemByHash, randomItemFromArray, getRandomFloat } from "./utils.js";
import { academicYear } from "../data/academic-years.js";
import { announcementEbauCode } from "../data/announcement-ebau.js";
// Database access methods

export function generateGraduated(id:string) {
    const branch = getItemByHash(id, degrees)
    const degree = getItemByHash(id, branch.TITULACION)
    const announcement = randomItemFromArray(announcementEbauCode)
    const announcementMultiplayer = Number(process.env["GCCE_EGRESADO_MULTIPLICADOR_COVOCATORIA_" + announcement.replaceAll(' ', '_').toUpperCase()]) || 1
    const mark = Math.min(getRandomFloat(5, 10) * announcementMultiplayer, 10)
    

    return Graduated.create({
        ID: id,
        CURSO_ACA: getItemByHash(id, academicYear),
        COD_PLAN: degree.COD_PLAN,
        CONV: announcement,
        NOTA_NUMERICA: mark
    })
}
