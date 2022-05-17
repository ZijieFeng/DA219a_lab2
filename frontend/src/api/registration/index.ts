import { getAxios } from '../axios'

export function getLatestFiveRegistrations() {
  return getAxios().get(`/registrations/latest-five`)
}
