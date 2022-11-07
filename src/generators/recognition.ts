
import { Recognition } from "../models/recognition.js";
import { degrees } from "../data/degrees.js"
import { getItemByHash, randomItemFromArray, ramdomCredits } from "./utils.js";



export function generateReconocimientos(id:string) {
    const branch = getItemByHash(id, degrees)
    const degree = getItemByHash(id, branch.TITULACION)
    return Recognition.create({
        ID: id,
        COD_PLAN: degree.COD_PLAN,
        CRED: ramdomCredits(Math.floor(Math.random() * 240))
    })
    
}
