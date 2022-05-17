import React from 'react'

import TableRow from '@material-ui/core/TableRow'

import useStyles from './../styles'

const EmptyRow = () => {
  const classes = useStyles()

  return (
    <tr>
      <td className={classes.templateEmpty} colSpan={20}>
        {'Table has no data'}
      </td>
    </tr>
  )
}

const EmptyTemplate = () => (
  <TableRow component={EmptyRow} />
)

export default EmptyTemplate
