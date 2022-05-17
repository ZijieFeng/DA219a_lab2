import React from 'react'

import TableCell from '@material-ui/core/TableCell'
import TableSortLabel from '@material-ui/core/TableSortLabel'

import useStyles from './../styles'

import { IHeaderCellSortableProps } from './../interfaces'

const HeaderCellSortable = ({
  active = false,
  children,
  className = '',
  handleSort,
  sortOrder,
}) => {
  const classes = useStyles()

  const handleClick = () => handleSort(active && sortOrder === 'ASC' ? 'DESC' : 'ASC')

  return (
    <TableCell className={`${classes.headerCellSortable} ${className}`}>
      <TableSortLabel
        active={active}
        direction={active ? sortOrder.toLowerCase() : 'asc'}
        onClick={handleClick}
      >
        {children}
      </TableSortLabel>
    </TableCell>
  )
}

export default HeaderCellSortable
