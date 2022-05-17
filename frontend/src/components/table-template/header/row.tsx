import React from 'react'

import TableRow from '@material-ui/core/TableRow'

import { IHeaderRowProps } from './../interfaces'

const HeaderRow = ({ children, className }: IHeaderRowProps) => {
  return (
    <TableRow className={className}>
      {children}
    </TableRow>
  )
}

export default HeaderRow
