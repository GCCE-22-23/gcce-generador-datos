import crc32 from 'crc-32'
import { randomUUID } from 'crypto'
import { degrees } from '../data/degrees.js'
import { modalities } from '../data/preinscription.js'
import { generateEnrolledSubject } from './enrolled_subject.js'
import { generateGraduated } from './graduated.js'
import { generateParentsEducationAndJob } from './parents-education-and-job.js'
import { generatePreinscription } from './preinscription.js'
import { generateReconocimientos } from './recognition.js'
import { generateRecord } from './records.js'
import { generateRegistrationDiscountType } from './registration-discount-type.js'
import { generateRegistration } from './registration.js'
import { generateTransfers } from './transfers.js'
import { getItemByHash } from './utils.js'

export function generateStudent() {
  const id = randomUUID()
  const idHash = crc32.str(id)
  const branch = getItemByHash(id, degrees)
  const degree = getItemByHash(id, branch.TITULACION)
  const graduationProbaility = Number(process.env["GCCE_PROBABILIDAD_EGRESEADO"]) || 4
  const subjets = degree.ASIGNATURA.filter(_ => !!Math.round(Math.random()))
  let promises = []

  promises.push(generateRegistration(id))
  promises.push(generatePreinscription(id))
  if (getItemByHash(id, modalities) === "BAC") {
    // TODO generate EBAU Materua and EBAU Prueba
  }

  for (let subject of subjets) {
    promises.push(generateEnrolledSubject(id, subject))
    promises.push(generateRegistrationDiscountType(id, subject))
    promises.push(generateRecord(id, subject))
  }
  promises.push(generateParentsEducationAndJob(id))
  if ((idHash % 4) === 0) {
    promises.push(generateTransfers(id))
  }

  if ((idHash % graduationProbaility) === 0) {
    promises.push(generateGraduated(id))
  }

  promises.push(generateReconocimientos(id))


  return Promise.all(promises)
}
