import React from 'react'

import HeaderRow from './../header/row'
import Cell from './../header/cell'
import CellSortable from './../header/cell-sortable'

import { IHeaderRowTemplateProps } from './../interfaces'

const HeaderRowTemplate = ({
  className,
  columns,
  handleSort,
  sortOrder,
  sortBy,
}: IHeaderRowTemplateProps) => {
  const onSort = key => order => handleSort(key, order)

  return (
    <HeaderRow className={className}>
      {columns.map(column => column.sortable
        ? (
          <CellSortable
            active={column.key === sortBy}
            handleSort={onSort(column.key)}
            key={column.key}
            sortOrder={sortOrder}
          >
            {column.title}
          </CellSortable>
        )
        : (<Cell key={column.key}>{column.title}</Cell>)
      )}
    </HeaderRow>
  )
}

export default HeaderRowTemplate
