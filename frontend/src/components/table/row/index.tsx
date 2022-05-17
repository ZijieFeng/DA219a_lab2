import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import ITableColumn from '../table-column'

import useStyles from './styles'

interface ISelection {
  isSelected: (item: any) => boolean
  select: (item: any) => void
}

interface IProps {
  row: any
  selection?: ISelection
  columns: ITableColumn[]
  classNames?: any
  cellClassName: string
  RowActions
  typographyVariant
}

export default function CustomTableRow({ row, selection, columns, classNames, cellClassName, RowActions, typographyVariant }: IProps) {
  const classes = useStyles()
  const isSelected = selection?.isSelected(row)
  const toggle = () => selection?.select(row)

  return (
    <TableRow hover={true} role='checkbox' tabIndex={-1} selected={isSelected} onClick={toggle} className={classNames.row}>
      {
        selection && (
          <TableCell padding='checkbox'>
            <Checkbox
              checked={isSelected}
              inputProps={{ 'aria-labelledby': row.id }}
              className={classes.checkbox}
            />
          </TableCell>
        )
      }

      {columns.map(column => (
        <TableCell key={column.field} className={cellClassName}>
          <Typography variant={typographyVariant} component='div'>
            {column.Component ? <column.Component row={row} classes={classNames} /> : row[column.field]}
          </Typography>
        </TableCell>
      ))}
      {
        RowActions && (
          <TableCell>
            <RowActions row={row} />
          </TableCell>
        )
      }
    </TableRow>
  )
}
