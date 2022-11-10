import { EnrolledSubject } from "../models/ebau_tests.js";
import { degrees } from "../data/degrees.js"
import { getItemByHash, randomItemFromArray, getRandomFloat } from "./utils.js";
import { academicYear } from "../data/academic-years.js";
import { speciality } from "../data/speciality-ebau.js";
import { announcementEbauCode } from "../data/announcement-ebau.js";
// Database access methods

export function generateEnrolledSubject(id:string) {
    const branch = getItemByHash(id, degrees)
    const degree = getItemByHash(id, branch.TITULACION)
    const announcement = randomItemFromArray(announcementEbauCode)
    const specialities = randomItemFromArray(speciality)
    
    var nota_b = getRandomFloat(2,4)
    var nota_p = 0
    if(announcement == "JUN"){
        nota_p = getRandomFloat(3,10);            
    }else if (announcement == "JUL"){
        nota_p = getRandomFloat(0,10);
    }else{
        nota_p = getRandomFloat(4,10);
    }
    var nota_d = nota_p + nota_b

    return EnrolledSubject.create({
        ID: id,
        CURSO_ACA: getItemByHash(id, academicYear),
        CONV: announcement,
        ESPECIALIDAD: specialities,
        NOTA_BACH: nota_b, 
        NOTA_PRUE: nota_p, 
        NOTA_DEF: nota_d, 
    })
}
