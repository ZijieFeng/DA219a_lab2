import { makeStyles, Theme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'

const drawerWidth = 240

export default makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  closeWrap: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: `100vh`,
  },
  badge: {
    color: 'white',
    height: '20px',
    width: '20px',
  },
  contentWrap: {
    width: '100%',
    height: `calc(100% - ${theme.spacing(12)}px)`,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0),
    },
  },
  link: {
    textDecoration: 'none',
    color: 'unset',
  },
}))
