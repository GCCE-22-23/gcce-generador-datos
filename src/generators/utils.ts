import * as crc32 from 'crc-32'

export function getItemByHash<T>(valueToHash: string, arr: T[]): T {
  const hash = crc32.str(valueToHash)
  return arr[hash % arr.length]
}

export function randomItemFromArray<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function getRandomFloat(min: number, max: number) {
  const str = (Math.random() * (max - min) + min).toFixed(2);
  return parseFloat(str)
}

export function ramdomCredits(num: number){
  return Math.ceil(num/6) * 6;
}