import { academicYear } from "../data/academic-years.js";
import { ParentsEducationAndJob } from "../models/parents-education-and-job.js";
import { getItemByHash } from "./utils.js";

export function generateParentsEducationAndJob(id: string) {
  return ParentsEducationAndJob.create({
    ID: id,
    CURSO_ACA: getItemByHash(id, academicYear),
    COD_VARIABLE: 0, // IDK TODO
    VALOR: "IDK" // IDK TODO
  })
}
