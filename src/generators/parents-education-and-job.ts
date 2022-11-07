import crc32 from 'crc-32'
import { academicYear } from "../data/academic-years.js";
import { ParentsEducationAndJob } from "../models/parents-education-and-job.js";
import { getItemByHash } from "./utils.js";

export function generateParentsEducationAndJob(id: string) {
  const variableCode = crc32.str(id) % 10
  return ParentsEducationAndJob.create({
    ID: id,
    CURSO_ACA: getItemByHash(id, academicYear),
    COD_VARIABLE: variableCode,
    VALOR: variableCode.toString(),
  })
}
