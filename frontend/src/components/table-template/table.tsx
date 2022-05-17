import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'

import templates from './templates'

import useStyles from './styles'

import { ITableTemplateProps } from './interfaces'

const TableTemplate = ({
  collection = [],
  columns = [],
  handlePageChange = (page) => {},
  handleRowsPerPageChange = (rows) => {},
  handleSort = (key, order) => {},
  loading = false,
  page = 0,
  pagination = true,
  rowsPerPage = 10,
  rowsPerPageOptions = [10, 25, 100],
  rowsTotal = 0,
  showEmptyRows = false,
  sortBy,
  sortOrder,
  BodyRowTemplate = templates.BodyRow,
  EmptyTemplate = templates.Empty,
  HeaderRowTemplate = templates.HeaderRow,
  LoadingRowTemplate = templates.LoadingRow,
  LoadingTemplate,
}: ITableTemplateProps) => {
  const classes = useStyles()
  const collectionLength = collection.length
  const rowsCount = ( showEmptyRows || !collectionLength ) ? rowsPerPage : collectionLength
  const rows = Array.from(Array(rowsCount).keys())

  const onChangePage = (event, page) => handlePageChange(page)

  const onChangeRowsPerPage = event => handleRowsPerPageChange(+event.target.value)

  return (
    <>
      <Table stickyHeader={true}>
        <TableHead>
          <HeaderRowTemplate
            className={classes.headerRow}
            columns={columns}
            handleSort={handleSort}
            sortBy={sortBy}
            sortOrder={sortOrder}
          />
        </TableHead>
        <TableBody>
          {loading && LoadingTemplate && <LoadingTemplate />}

          {!loading && !collectionLength && <EmptyTemplate />}

          {( collectionLength || ( loading && !LoadingTemplate )) && rows.map(index =>
            collection[index] ? (
              <BodyRowTemplate
                className={classes.bodyRow}
                columns={columns}
                key={index}
                row={collection[index]}
              />
            ) : (
              <LoadingRowTemplate
                className={classes.bodyRow}
                columns={columns}
                key={index}
                loading={loading}
              />
            )
          )}
        </TableBody>
      </Table>
      {pagination && (
        <TablePagination
          component='div'
          count={rowsTotal}
          onPageChange={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
        />
      )}
    </>
  )
}

export default TableTemplate
