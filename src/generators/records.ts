import crc32 from 'crc-32'
import { degrees } from "../data/degrees.js";
import { call } from '../data/subject.js';
import { Record } from "../models/records.js";
import { getItemByHash } from "./utils.js";

function markToStr(mark: number): string {
  if (mark < 5) {
    return "SS"
  } else if (mark < 7) {
    return "AP"
  } else if (mark < 9) {
    return "NT"
  } else if (mark < 9.5) {
    return "SB"
  } else {
    return "MH"
  }
}

export function generateRecord(id: string, subject: string) {
  const branch = getItemByHash(id, degrees)
  const degree = getItemByHash(id, branch.TITULACION)
  const asigMultipliyer =  Number(process.env["GCCE_LINEAS_DE_ACTAS_MULTIPLICADOR_NOTA_ASIGNATURA_" + subject.replaceAll(' ', '_').toUpperCase()]) || 1
  const branchMultipliyer =  Number(process.env["GCCE_LINEAS_DE_ACTAS_MULTIPLICADOR_NOTA_RAMA_" + branch.RAMA.replaceAll(' ', '_').toUpperCase()]) || 1
  const mark = Math.min(Math.random() * 10 * asigMultipliyer * branchMultipliyer, 10)

  return Record.create({
    ID: id,
    COD_PLAN: degree.COD_PLAN,
    COD_ASIGN:  crc32.str(subject),
    ASIGNATURA: subject,
    CONV: getItemByHash(id, call),
    CALIF_NUMERICA: mark,
    CALIF: markToStr(mark)
  })
}
