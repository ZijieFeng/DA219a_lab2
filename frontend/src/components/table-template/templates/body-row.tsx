import React from 'react'

import BodyRow from './../body/row'
import BodyCell from './../body/cell'

import { IBodyRowTemplateProps } from './../interfaces'

const BodyRowTemplate = ({
  className,
  columns,
  row,
}: IBodyRowTemplateProps) => (
  <BodyRow className={className} hover={true}>
    {columns.map(column => (
      <BodyCell key={column.key}>
        {column.BodyCellComponent
          ? (<column.BodyCellComponent row={row} />)
          : row[column.key]
        }
      </BodyCell>
    ))}
  </BodyRow>
)

export default BodyRowTemplate
