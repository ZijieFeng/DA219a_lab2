import React from 'react'

import TableCell from '@material-ui/core/TableCell'

import useStyles from './../styles'

import { IHeaderCellProps } from './../interfaces'

const HeaderCell = ({ children, className = '' }: IHeaderCellProps) => {
  const classes = useStyles()

  return (
    <TableCell className={`${classes.headerCell} ${className}`}>
      {children}
    </TableCell>
  )
}

export default HeaderCell
