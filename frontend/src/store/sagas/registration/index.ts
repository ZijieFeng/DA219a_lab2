import { all, call, put, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import api from 'api'
import PromiseResponse from 'interfaces/promise-response'

import actions from 'store/actions'

export function* getRegistrations(action: ReturnType<typeof actions.registration.getRegistrations>) {
  try {
    const res: PromiseResponse<typeof api.registration.getLatestFiveRegistrations> = yield call(api.registration.getLatestFiveRegistrations)

    if (res.status !== 200) {
      throw (res)
    }

    yield put(actions.registration.getRegistrationsSuccess(res.data))
  } catch (error) {
    yield put(actions.registration.getRegistrationsFailure(error))
    yield put(actions.snackbar.notify({
      message: 'Failed to get registation data',
      variant: 'error',
    }))
  }
}

function* watchGetRegistrations() {
  yield takeLatest(actions.registration.getRegistrations, getRegistrations)
}

export default function* root() {
  yield all([
    watchGetRegistrations(),
  ])
}
