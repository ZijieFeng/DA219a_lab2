import { createReducer, ActionType } from 'typesafe-actions'
import * as actions from 'store/actions/snackbar'

import IMessageInfo from 'interfaces/message-info'
type IAction = ActionType<typeof actions>

interface IState {
  queue: IMessageInfo[]
  opened: boolean
  messageInfo: IMessageInfo | null
}

const initState: IState = {
  queue: [],
  opened: false,
  messageInfo: null,
}

const reducer = createReducer<IState, IAction>(initState)
  .handleAction(actions.push, (state, { payload: { messageInfo } }) => ({
    ...state,
    queue: [
      ...state.queue,
      {
        message: messageInfo.message,
        variant: messageInfo.variant,
        key: new Date().getTime(),
      },
    ],
  }))
  .handleAction(actions.close, state => ({
    ...state,
    opened: false,
  }))
  .handleAction(actions.shift, state => {
    if (state.queue.length > 0) {
      return {
        messageInfo: state.queue[0],
        queue: state.queue.filter((i, key) => key > 0),
        opened: true,
      }
    }

    return state
  })

export default reducer
