import { getItemByHash, randomItemFromArray, getRandomFloat } from "./utils.js";
import { academicYear } from "../data/academic-years.js";
import { speciality } from "../data/speciality-ebau.js";
import { announcementEbauCode } from "../data/announcement-ebau.js";
import { EbauTest } from "../models/ebau_tests.js";
// Database access methods

export function generateEbauTests(id: string) {
    const announcement = randomItemFromArray(announcementEbauCode)
    const specialities = randomItemFromArray(speciality)
    
    const announcementBachillerMultiplayer = Number(process.env["GCCE_ANNOUNCEMENT_MULTIPLICADOR_COVOCATORIA_BACHILLER_" + announcement.replaceAll(' ', '_').toUpperCase()]) || 1
    const announcementEbauMultiplayer = Number(process.env["GCCE_ANNOUNCEMENT_MULTIPLICADOR_COVOCATORIA_EBAU_" + announcement.replaceAll(' ', '_').toUpperCase()]) || 1
    const bachillerMark = Math.min(getRandomFloat(3,6) * announcementBachillerMultiplayer, 6)
    const ebauMark = Math.min(getRandomFloat(2,4) * announcementEbauMultiplayer, 4)

    return EbauTest.create({
        ID: id,
        CURSO_ACA: getItemByHash(id, academicYear),
        CONV: announcement,
        ESPECIALIDAD: specialities,
        NOTA_BACH: bachillerMark, 
        NOTA_PRUE: ebauMark, 
        NOTA_DEF: bachillerMark * ebauMark
    })
}
