import { all } from 'redux-saga/effects'

import registration from './registration'
import snackbar from './snackbar'

export default function* root() {
  yield all([
    registration(),
    snackbar(),
  ])
}
