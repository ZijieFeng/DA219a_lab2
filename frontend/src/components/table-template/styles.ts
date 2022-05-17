import { makeStyles, Theme } from '@material-ui/core/styles'

import { colors } from 'theme'

export default makeStyles((theme: Theme) => ({
  bodyRow: {
    '& td:first-child': {
      paddingLeft: theme.spacing(8),
    },
    '& th:last-child': {
      paddingRight: theme.spacing(8),
    },
  },
  bodyCell: {
  },
  headerRow: {
    height: theme.spacing(10),

    '& th:first-child': {
      paddingLeft: theme.spacing(8),
    },
    '& th:last-child': {
      paddingRight: theme.spacing(8),
    },
  },
  headerCell: {
    backgroundColor: colors.grey,
  },
  headerCellSortable: {
    backgroundColor: colors.grey,
  },
  templateEmpty: {
    padding: theme.spacing(9, 0, 1, 8),
  },
}))
