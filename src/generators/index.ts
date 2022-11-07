import { randomUUID } from 'crypto'
import { modalities } from '../data/preinscription.js'
import { generatePreinscription } from './preinscription.js'
import { generateRegistration } from './registration.js'
import { getItemByHash } from './utils.js'

export function generateStudent() {
  const id = randomUUID()
  let promises = []

  promises.push(generateRegistration(id))
  promises.push(generatePreinscription(id))
  if (getItemByHash(id, modalities) === "BAC") {
    // TODO generate EBAU Materua and EBAU Prueba
  }

  

  return Promise.all(promises)
}
