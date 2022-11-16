import crc32 from 'crc-32'
import { randomUUID } from 'crypto'
import { Model } from 'sequelize'
import { academicYear } from '../data/academic-years.js'
import { Branch, degrees, Titulacion } from '../data/degrees.js'
import { generalSubjects, specificSubjects } from '../data/ebau-subject.js'
import { modalities } from '../data/preinscription.js'
import { generateEbauSubject } from './ebau_subjects.js'
import { generateEbauTests } from './ebau_tests.js'
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


// A student can take up to 6  yars to finish the degree
const academicYearsForNewStudents = academicYear.slice(0, -5)


interface academicYearForStudentResult {
  registration: Model<any, any>,
  subjects: enrollSubjectResult[]
}

async function generateAcademicYearForStudent(id: string, academicYear: string, yearsEnrolled: number, branch: Branch, degree: Titulacion): Promise<academicYearForStudentResult> {
  const registration = generateRegistration(id, academicYear, yearsEnrolled === 0)

  let subjectsResults = []
  for (let subject of degree.ASIGNATURA) {
    subject += ` ${yearsEnrolled+1}`
    subjectsResults.push(enrollSubject(id, academicYear, subject))
  }

  return {
    registration: await registration,
    subjects: await Promise.all(subjectsResults)
  }
}

export async function generateStudent() {
  const id = randomUUID()
  const branch = getItemByHash(id, degrees)
  const degree = getItemByHash(id, branch.TITULACION)
  const initialAcademicYearIndex = Math.abs(crc32.str(id)) % academicYearsForNewStudents.length
  let promises = []
  promises.push(generatePreinscription(id, academicYearsForNewStudents[initialAcademicYearIndex]))
  promises.push(generateParentsEducationAndJob(id, academicYearsForNewStudents[initialAcademicYearIndex]))

  if (getItemByHash(id, modalities) === "BAC") {
    promises.push(...generateBachillerRecords(id))
  }

  if ((crc32.str(id) % 4) === 0) {
    promises.push(generateTransfers(id))
    promises.push(generateReconocimientos(id))
  }

  let yearsEnrolled = 0
  let skipYears = 0
  const skipYear = () => {
    skipYears++
    switch (skipYears) {
      case 1:
        if (Math.random() <= (Number(process.env.GCCE_PORCENTAJE_REINTENTO_1) || 0.1)) {
          return
        }
        skipYears = 2
      case 2: 
      if (Math.random() <= (Number(process.env.GCCE_PORCENTAJE_REINTENTO_2) || 0.05)) {
        return
      }
      skipYears = 3
    }
  }

  for (;;) {
    const result = await generateAcademicYearForStudent(id, academicYear[initialAcademicYearIndex + yearsEnrolled + skipYears], yearsEnrolled, branch, degree)
    const numberOfEnrolledSubjects = result.subjects.length
    const numberOfPassedSubjects = result.subjects.reduce((acc, sub: any) => sub.record.CALIF_NUMERICA >= 5.0 ? acc + 1 : acc, 0)
    const ratio =  numberOfPassedSubjects / numberOfEnrolledSubjects
    // Si supera el número de asignaturas necesarias
    if (ratio >= (Number(process.env.GCCE_PORCENTAJE_EXITO) || 0.5)) {
      // there is chanche of the student having a sabatic year evene when they pass
      if (Math.random() > (Number(process.env.GCCE_PORCENTAJE_AVANCE) || 0.8)) {
        skipYear()
      }
    } else if (Math.random() <= (Number(process.env.GCCE_PORCENTAJE_RETIRADA) || 0.75))  {
      skipYear()
    }
    yearsEnrolled++
    
    if (skipYears > 2) {
      break
    }

    if (yearsEnrolled === 4) {
      promises.push(generateGraduated(id, academicYear[initialAcademicYearIndex + (yearsEnrolled - 1) + skipYears]))
      break
    }
  }

  return Promise.all(promises)
}


function generateBachillerRecords(id: string) {
  let promises = []
  for (let subject of generalSubjects) {
    promises.push(generateEbauSubject(id, subject, "general"))
  }
  let randomIndexes = Math.floor(Math.random() * (specificSubjects.length - 2))
  promises.push(generateEbauSubject(id, specificSubjects[randomIndexes], "especifica"))
  promises.push(generateEbauSubject(id, specificSubjects[randomIndexes + 1], "especifica"))

  promises.push(generateEbauTests(id))

  return promises
}


interface enrollSubjectResult {
  enrollment: Model<any, any>,
  registrationDiscount: Model<any, any>,
  record: Model<any, any>
}

async function enrollSubject(id: string, academicYear: string, subject: any): Promise<enrollSubjectResult> {
  const enrollment = generateEnrolledSubject(id, academicYear, subject)
  const registrationDiscount = generateRegistrationDiscountType(id, academicYear, subject)
  const record = generateRecord(id, subject)
  
  return {
    enrollment: await enrollment,
    registrationDiscount: await registrationDiscount,
    record: await record
  }
}

