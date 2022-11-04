import crc32 from 'crc-32'
import { academicYear } from '../data/academic-years.js'
import { degrees } from '../data/degrees.js'
import { subjectTypologies } from '../data/subject_typology.js'
import { EnrolledSubject } from '../models/enrolled-subjects.js'
import { getItemByHash } from './utils.js'

export function generateEnrolledSubject(id:string, subject:string) {
  const branch = getItemByHash(id, degrees)
  const degree = getItemByHash(id, branch.TITULACION)

  return EnrolledSubject.create({
    ID: id,
    CURSO_ACA: getItemByHash(id, academicYear),
    COD_PLAN: degree.COD_PLAN,
    COD_ASIGNATURA: crc32.str(subject),
    ASIGNATURA: subject,
    TIPOLOGIA: getItemByHash(subject, subjectTypologies)
  })
}
