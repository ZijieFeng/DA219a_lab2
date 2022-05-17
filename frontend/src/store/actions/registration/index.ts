import { createAction } from 'typesafe-actions'

export const getRegistrations = createAction(
  'registration/GET_REGISTRATIONS'
)()

export const getRegistrationsSuccess = createAction(
  'registration/GET_REGISTRATIONS_SUCCESS',
  (list: any) => ({ list })
)()

export const getRegistrationsFailure = createAction(
  'registration/GET_REGISTRATIONS_FAILURE',
  (error: Error) => ({ error })
)()

export const changeOrder = createAction(
  'registration/CHANGE_ORDER',
  (orderBy: string) => ({ orderBy })
)()
