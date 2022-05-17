import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import snackbar from './snackbar'

import registration from './registration'

export default history =>
  combineReducers({
    router: connectRouter(history),
    snackbar,
    registration,
  })
