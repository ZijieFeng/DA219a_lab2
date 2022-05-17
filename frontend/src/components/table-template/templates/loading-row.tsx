import React from 'react'

import { Rectangle } from 'components/skeleton'

import BodyRow from './../body/row'
import BodyCell from './../body/cell'

import { ILoadingRowTemplateProps } from './../interfaces'

const LoadingRowTemplate = ({
  className,
  columns,
  loading,
}: ILoadingRowTemplateProps) => (
  <BodyRow className={className}>
    {columns.map(column => (
      <BodyCell key={column.key}>
        <Rectangle
          animation={loading}
          placeholder={column.placeholder || column.key}
        />
      </BodyCell>
    ))}
  </BodyRow>
)

export default LoadingRowTemplate
