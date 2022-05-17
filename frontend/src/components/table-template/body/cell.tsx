import React from 'react'

import TableCell from '@material-ui/core/TableCell'

import useStyles from './../styles'

import { IBodyCellProps } from './../interfaces'

const BodyCell = ({
  children,
  className = '',
  onClick = () => {}
}: IBodyCellProps) => {
  const classes = useStyles()

  return (
    <TableCell className={`${classes.bodyCell} ${className}`} onClick={onClick}>
      {children}
    </TableCell>
  )
}

export default BodyCell
