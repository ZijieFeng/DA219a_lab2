import React from 'react'
import clsx from 'clsx'

import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import WarningIcon from '@material-ui/icons/Warning'

import { useSelector, useActions } from 'store'

import useStyles from './styles'

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
}

export interface IProps {
  className?: string
  message?: string
  onClose?: () => void
  variant: keyof typeof variantIcon
}

function MySnackbarContentWrapper({ className, message, onClose, variant }: IProps) {
  const classes = useStyles()
  const Icon = variantIcon[variant]

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby='client-snackbar'
      message={(
        <span id='client-snackbar' className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={[
        (
          <IconButton key='close' aria-label='close' color='inherit' onClick={onClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        ),
      ]}
    />
  )
}

export default function CustomSnackbar() {
  const { opened, messageInfo } = useSelector(state => state.snackbar)
  const actions = useActions()

  if (!messageInfo) {
    return null
  }

  return (
    <Snackbar
      key={messageInfo.key}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={opened}
      autoHideDuration={4000}
      onClose={actions.snackbar.close}
      onExited={actions.snackbar.shift}
    >
      <MySnackbarContentWrapper
        onClose={actions.snackbar.close}
        variant={messageInfo.variant}
        message={messageInfo.message}
      />
    </Snackbar>
  )
}
