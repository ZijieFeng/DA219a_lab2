import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'

import { ReactComponent as WarningIcon } from 'assets/warning.svg'

import useStyles from './styles'
import Loader from 'components/loader'

interface IWarningDialogProps {
  open: boolean
  loading?: boolean
  title: string
  subtitle?: string
  onClose?: () => void
  submit?: () => void
  submitText: string
}

const WarningDialog: FC<IWarningDialogProps> = props => {
  const {
    open,
    loading,
    title,
    subtitle,
    children,
    onClose,
    submit,
    submitText,
  } = props
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: classes.dialog }}
    >
      <div className={classes.dialogContainer}>
        <div className={classes.warningArea}>
          <WarningIcon />
        </div>

        <div className={classes.dialogHeader}>
          <Typography variant={'h4'}>{title}</Typography>
          {subtitle && (
            <Typography variant={'h5'} className={classes.subtitle}>{subtitle}</Typography>
          )}
        </div>

        <DialogContent>
          {children}
        </DialogContent>

        <DialogActions className={classes.dialogActions}>
          <Loader loaded={loading !== true}>
            <Button type='submit' variant={'contained'} onClick={submit} className={classes.submit}>
              {submitText || ''}
            </Button>

            <Button onClick={onClose} variant={'text'} color='primary' className={classes.cancel}>
              {'Cancel'}
            </Button>
          </Loader>
        </DialogActions>
      </div>
    </Dialog>
  )
}

export default WarningDialog
