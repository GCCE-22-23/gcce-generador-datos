

import { Graduated } from "../models/graduated.js";
import { degrees } from "../data/degrees.js"
import { getItemByHash, randomItemFromArray, getRandomFloat } from "./utils.js";
import { academicYear } from "../data/academic-years.js";
import { announcementCode } from "../data/announcement-code.js";
// Database access methods

export function generateGraduated(id:string) {
    const branch = getItemByHash(id, degrees)
    const degree = getItemByHash(id, branch.TITULACION)
    const announcement = randomItemFromArray(announcementCode)
    var nota = 0
    if(announcement == "Primera Convocatoria"){
        nota = getRandomFloat(0,10);            
    }else if (announcement == "Sexta Convocatoria"){
        nota = getRandomFloat(4,10);
    }else{
        nota = getRandomFloat(2,10);
    }
    

    return Graduated.create({
        ID: id,
        CURSO_ACA: getItemByHash(id, academicYear),
        COD_PLAN: degree.COD_PLAN,
        CONV: announcement,
        NOTA_NUMERICA: nota
    })
}
