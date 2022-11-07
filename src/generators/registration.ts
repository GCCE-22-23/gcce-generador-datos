import crc32 from 'crc-32'
import { academicYear } from "../data/academic-years.js";
import { degrees } from "../data/degrees.js";
import { municipality, nationalities, newStudent, provinces, sexes } from '../data/student.js';
import { Registration } from "../models/registration.js";
import { getItemByHash, randomItemFromArray } from "./utils.js";

export function generateRegistration(id: string) {
  const branch = getItemByHash(id, degrees)
  const degree = getItemByHash(id, branch.TITULACION)

  return Registration.create({
    ID: id,
    CURSO_ACA: getItemByHash(id, academicYear),
    RAMA: crc32.str(branch.RAMA),
    COD_AMBITO_ISCED: degree.COD_ISEC,
    COD_PLAN: degree.COD_PLAN,
    CODIGO_MEC: degree.COD_PLAN,
    TITULACION: degree.TITULACION,
    SEXO: getItemByHash(id, sexes),
    ANIO_NAC: Math.round(Math.random()) * 33 + 1970,
    NACIONALIDAD: getItemByHash(id, nationalities),
    PROVINCIA: getItemByHash(id, provinces),
    MUNICIPIO: getItemByHash(id, municipality),
    NUES: getItemByHash(id, newStudent)
  })
}
