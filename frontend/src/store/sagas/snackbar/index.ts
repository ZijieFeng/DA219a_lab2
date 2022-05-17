import { all, put, takeLatest, select } from 'redux-saga/effects'

import actions from 'store/actions'
import { IStoreState } from 'store'

export function* notify(action) {
  const opened = yield select((state: IStoreState) => state.snackbar.opened)

  yield put(actions.snackbar.push(action.payload.messageInfo))
  if (opened) {
    yield put(actions.snackbar.close())
  } else {
    yield put(actions.snackbar.shift())
  }
}

function* watchNotify() {
  yield takeLatest(actions.snackbar.notify, notify)
}

export default function* root() {
  yield all([
    watchNotify(),
  ])
}
