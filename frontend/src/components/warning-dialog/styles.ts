import { makeStyles, Theme } from '@material-ui/core/styles'
import { colors } from 'theme'

export default makeStyles((theme: Theme) => ({
  dialog: {
    maxWidth: '752px',
    width: '100%',
    maxHeight: 'unset',
    borderRadius: '10px',
  },
  dialogContainer: {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    padding: theme.spacing(4, 2),
  },
  warningArea: {
    padding: theme.spacing(2, 0, 1, 0),
    textAlign: 'center',
  },
  dialogHeader: {
    textAlign: 'center',
    padding: theme.spacing(2, 0, 3),
  },
  subtitle: {
    margin: theme.spacing(1, 0, 0),
  },
  dialogActions: {
    display: 'flex',
    alignItems: 'flex-end',
    margin: theme.spacing(5, 0, 0),
  },
  submit: {
    backgroundColor: colors.danger,
    height: theme.spacing(6),
    borderRadius: '4px',
    color: '#fff',
    textShadow: 'none',
    padding: theme.spacing(1, 2),
    boxShadow: 'none',

    '&:hover': {
      background: colors.danger,
      color: theme.palette.common.white,
    },
  },
  cancel: {
    height: theme.spacing(6),
    padding: theme.spacing(1, 2),
    borderRadius: '4px',
    color: '#000',
  },
}))
