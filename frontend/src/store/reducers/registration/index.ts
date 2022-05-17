import { createReducer, ActionType } from 'typesafe-actions'
import * as actions from 'store/actions/registration'

import { commonChangeOrder } from 'utils/useSorting'

type IAction = ActionType<typeof actions>

interface IState {
  data: any[]
  loaded: boolean
  deleteSuccess: boolean
  submitting: boolean
  error: Error | null

  page: number
  pageSize: number

  order: 'asc' | 'desc'
  orderBy: string
}

const initState: IState = {
  data: [],
  loaded: false,
  deleteSuccess: false,
  submitting: false,
  error: null,

  page: 0,
  pageSize: 10,

  order: 'desc',
  orderBy: 'updated_at',
}

const reducer = createReducer<IState, IAction>(initState)
  .handleAction(actions.getRegistrations, state => ({
    ...state,
    loaded: false,
  }))
  .handleAction(actions.getRegistrationsSuccess, (state, { payload: { list } }) => ({
    ...state,
    data: list.map(item => ({
        course_code: item.course_code,
        course_name: item.courses[0].name,
        student_name: item.students[0].full_name,
        student_id: item.student_id,
        registration_time: item.unix_timestamp?.$timestamp,
    })),
    loaded: true,
  }))
  .handleAction(actions.getRegistrationsFailure, (state, { payload: { error } }) => ({
    ...state,
    error,
  }))
  .handleAction(actions.changeOrder, (state, { payload: { orderBy } }) => (
    commonChangeOrder(state, orderBy)
  ))

export default reducer
