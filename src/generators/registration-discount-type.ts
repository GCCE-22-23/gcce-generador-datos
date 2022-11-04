import crc32 from 'crc-32'
import { RegistrationDiscountType } from '../models/registration-discount-type.js'
import { getItemByHash } from './utils.js'

import { academicYear } from '../data/academic-years.js'
import { degrees } from '../data/degrees.js'

export function generateRegistrationDiscountType(id: string, subject: string) {
  const branch = getItemByHash(id, degrees)
  const degree = getItemByHash(id, branch.TITULACION)


  return RegistrationDiscountType.create({
    ID: id,
    CURSO_ACA: getItemByHash(id, academicYear),
    COD_PLAN: degree.COD_PLAN,
    COD_TIPO_MATRICUL: crc32.str(subject),
    TIPO_MATRICULA: subject
  })
}
