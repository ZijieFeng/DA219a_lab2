import { makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({
  contentWrap: {
    display: 'flex',
    height: `calc(100% - ${theme.spacing(1)}px)`,
    marginTop: theme.spacing(1),
  },
  textButton: {
    height: theme.spacing(4.5),
    marginLeft: theme.spacing(1.5),
  },
  tablePaper: {
    height: `100%`,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '100%',
    position: 'relative',
  },
  tableWrapper: {
    overflow: 'auto',
  },
  status: {
    display: 'flex',
  },
  statusPoint: {
    width: '12px',
    height: '12px',
    borderRadius: '12px',
    margin: 'auto',
    marginRight: theme.spacing(2),
    marginLeft: '0px',
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight: {
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.secondary.light,
  },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
  secondaryRow: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  formControl: {
    flexBasis: '100%',
    margin: `${theme.spacing(2)}px 0`,
  },
  link: {
    textDecoration: 'none',
    margin: 'auto',
    whiteSpace: 'nowrap',
  },
}))
