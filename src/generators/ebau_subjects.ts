import crc32 from 'crc-32'
import { academicYear } from '../data/academic-years.js'
import { announcementEbauCode } from '../data/announcement-ebau.js'
import { EbauSubject } from '../models/ebau_subjects.js'
import { getItemByHash, getRandomFloat, randomItemFromArray } from './utils.js'

export function generateEbauSubject(id:string, subject:string, fase: string) {
  const announcement = randomItemFromArray(announcementEbauCode);
  const ebauMultiplayer = Number(process.env["GCCE_EBAU_ASIGNATURA_MULTIPLICADR_" + announcement.replaceAll(' ', '_').toUpperCase()]) || 1
  const ebauMark = Math.min(getRandomFloat(5,10) * ebauMultiplayer, 10)

  return EbauSubject.create({
    ID: id,
    CURSO_ACA: getItemByHash(id, academicYear),
    CONV: announcement,
    COD_MATERIA: crc32.str(subject),
    MATERIA: subject,
    FASE: fase,
    NOTA: ebauMark
  })
}
