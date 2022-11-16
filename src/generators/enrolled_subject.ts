import crc32 from 'crc-32'
import { degrees } from '../data/degrees.js'
import { typologies } from '../data/subject.js'
import { EnrolledSubject } from '../models/enrolled-subjects.js'
import { getItemByHash } from './utils.js'

export function generateEnrolledSubject(id: string, academicYear: string, subject: string) {
  const branch = getItemByHash(id, degrees)
  const degree = getItemByHash(id, branch.TITULACION)

  return EnrolledSubject.create({
    ID: id,
    CURSO_ACA: academicYear,
    COD_PLAN: degree.COD_PLAN,
    COD_ASIGNATURA: crc32.str(subject),
    ASIGNATURA: subject,
    TIPOLOGIA: getItemByHash(subject, typologies)
  })
}
