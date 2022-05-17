import { createAction } from 'typesafe-actions'
import IMessageInfo from 'interfaces/message-info'

export const notify = createAction(
  'snackbar/NOTIFY',
  (messageInfo: Partial<IMessageInfo>) => ({ messageInfo })
)()

export const push = createAction(
  'snackbar/PUSH',
  (messageInfo: IMessageInfo) => ({ messageInfo })
)()

export const shift = createAction(
  'snackbar/SHIFT'
)()

export const close = createAction(
  'snackbar/CLOSE'
)()
