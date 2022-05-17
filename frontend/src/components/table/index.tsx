import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

import Row from './row'

import useStyles from './styles'

import ITableColumn from './table-column'

interface ISorting {
  order: 'desc' | 'asc'
  orderBy: string
  handleRequestSort: (property: string) => void
}

interface ISelection {
  isSelected: (item: any) => boolean
  countMatched: (data: any) => number
  select: (item: any) => void
  selectAll: (data: any) => void
}

interface IProps {
  data: any[]
  columns: ITableColumn[]
  selection?: ISelection
  sorting?: ISorting
  RowActions?: any
  CustomRow?: any
  classNames?: any
  typographyVariant?: any
}

export default function CustomTable({ data, columns, selection, sorting, RowActions, classNames, typographyVariant, CustomRow }: IProps) {
  const classes = useStyles()
  const { order, orderBy, handleRequestSort } = sorting || {}

  const createSortHandler = property => () => {
    if (typeof handleRequestSort === 'function') {
      handleRequestSort(property)
    }
  }

  const count = React.useMemo(
    () => selection?.countMatched(data) || 0,
    [selection, data]
  )

  const selectAll = React.useCallback(
    () => selection?.selectAll(data.filter(item => !item.disabled)),
    [selection, data]
  )

  const wrapTypographyVariant = React.useMemo(
    () => typographyVariant || 'body2',
    [typographyVariant]
  )

  return (
    <Table stickyHeader={true}>
      <TableHead>
        <TableRow>
          {
            selection && (
              <TableCell padding='checkbox'>
                <Checkbox
                  indeterminate={count > 0 && count < data.length}
                  checked={count === data.length && count !== 0}
                  onChange={selectAll}
                />
              </TableCell>
            )
          }
          {columns.map(column => (
            <TableCell key={column.field} className={classes.cell}>
              <TableSortLabel
                active={orderBy === column.field}
                direction={order}
                onClick={createSortHandler(column.field)}
              >
                <Typography variant={wrapTypographyVariant}>
                  {column.title}
                </Typography>
                {orderBy === column.field ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
          {
            RowActions && <TableCell className={classes.cell} />
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          CustomRow
            ? (
              <CustomRow
                row={row}
                key={`index - ${index} + id - ${row.id}`}
                columns={columns}
                selection={selection}
                cellClassName={classes.cell}
                classNames={classNames}
                RowActions={RowActions}
                typographyVariant={wrapTypographyVariant}
              />
            ) : (
              <Row
                row={row}
                key={`index - ${index} + id - ${row.id}`}
                columns={columns}
                selection={selection}
                cellClassName={classes.cell}
                classNames={classNames}
                RowActions={RowActions}
                typographyVariant={wrapTypographyVariant}
              />
            )
        ))}
      </TableBody>
    </Table>
  )
}
