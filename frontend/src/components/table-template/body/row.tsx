import React from 'react'

import TableRow from '@material-ui/core/TableRow'

import { IBodyRowProps } from './../interfaces'

const BodyRow = ({
  children,
  className = '',
  hover = false,
}: IBodyRowProps) => (
  <TableRow className={className} hover={hover}>
    {children}
  </TableRow>
)

export default BodyRow
