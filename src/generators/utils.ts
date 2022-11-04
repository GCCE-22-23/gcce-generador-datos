import * as crc32 from 'crc-32'

export function getItemByHash<T>(valueToHash: string, arr: T[]): T {
  const hash = crc32.str(valueToHash)
  return arr[hash % arr.length]
}
