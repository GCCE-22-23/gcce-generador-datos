import crc32 from 'crc-32'
import { ParentsEducationAndJob } from "../models/parents-education-and-job.js";
import { getItemByHash } from "./utils.js";

export function generateParentsEducationAndJob(id: string, academicYear: string) {
  const variableCode = Math.abs(crc32.str(id)) % 10
  return ParentsEducationAndJob.create({
    ID: id,
    CURSO_ACA: academicYear,
    COD_VARIABLE: variableCode,
    VALOR: variableCode.toString(),
  })
}
