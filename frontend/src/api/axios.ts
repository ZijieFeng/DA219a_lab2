import axios, { AxiosTransformer } from 'axios'

const SERVER_API = process.env.REACT_APP_SERVER_ADDRESS

export const baseAxios = axios.create({
  baseURL: SERVER_API,
})

const defaultTransformers = (): AxiosTransformer[] => {
  const { transformRequest } = axios.defaults
  if (!transformRequest) {
    return []
  } else if (transformRequest instanceof Array) {
    return transformRequest
  } else {
    return [transformRequest]
  }
}

function cleanObject(obj, keys = []) {
  if (!obj) {
    return obj
  }

  const res = { ...obj }

  keys.forEach(key => {
    delete res[key]
  })

  return res
}

export function getAxios(ignoredKeys?) {
  return baseAxios
}
