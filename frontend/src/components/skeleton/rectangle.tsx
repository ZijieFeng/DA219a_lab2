import React from 'react'
import { styled } from '@material-ui/core/styles'

import useStyles from './styles'
import { colors } from 'theme'

import { IRectangleProps } from './interfaces'

const Rectangle = styled('span')({
  color: colors.greyLight,
  paddingRight: '6px',
})

const SkeletonRectangle = ({ animation, placeholder }: IRectangleProps) => {
  const classes = useStyles()

  return (
    <Rectangle className={`${classes.grey} ${animation && classes.opacity}`}>
      {placeholder}
    </Rectangle>
  )
}

export default SkeletonRectangle
