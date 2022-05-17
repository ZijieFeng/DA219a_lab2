import { isObject } from 'lodash'

export const excludeKeysFromObject = (...keys) => data => {
  if (!isObject(data)) {
    return data
  }
  keys.forEach(key => {
    delete data[key]
  })
  return data
}
