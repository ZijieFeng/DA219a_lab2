import React from 'react'
import { styled } from '@material-ui/core/styles'

import useStyles from './styles'

import { ICircleProps } from './interfaces'

const Circle = styled('div')({
  borderRadius: 20,
  display: 'inline-block',
  height: 40,
  width: 40,
})

const SkeletonCircle = ({ animation }: ICircleProps) => {
  const classes = useStyles()

  return (
    <Circle className={`${classes.grey} ${animation && classes.opacity}`} />
  )
}

export default SkeletonCircle
