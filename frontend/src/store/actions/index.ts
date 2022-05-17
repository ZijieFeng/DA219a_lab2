import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as snackbar from './snackbar'
import * as registration from './registration'

const actions = {
  snackbar,
  registration,
}

export default actions

export const useActions = () => {
  const dispatch = useDispatch()

  const boundActions = useMemo(() => {
    const obj = { ...actions }

    Object.keys(actions).forEach(key => {
      obj[key] = bindActionCreators(actions[key], dispatch)
    })

    return obj
  }, [dispatch])

  return boundActions
}
