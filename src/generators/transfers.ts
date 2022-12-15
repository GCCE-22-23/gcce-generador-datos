import { degrees } from "../data/degrees.js"
import { Transfers } from "../models/transfers.js";
import { getItemByHash, randomItemFromArray, getRandomFloat } from "./utils.js";
import { academicYear } from "../data/academic-years.js";
import { curriculumCode } from "../data/curriculum-code.js";
import { university } from "../data/university.js";
import { transfers } from "../data/transfers.js";

// COD_TRASLADOS, CURSO_ACA, COD_PLAN, TRASLADO, UNIV_TRAS
export function generateTransfers(id:string) {
    const branch = getItemByHash(id, degrees)
    return Transfers.create({
        ID: id,
        CURSO_ACA: randomItemFromArray(academicYear),
        COD_PLAN: randomItemFromArray(curriculumCode),
        TRASLADO: randomItemFromArray(transfers),
        UNIV_TRAS: randomItemFromArray(university),
    })
}
