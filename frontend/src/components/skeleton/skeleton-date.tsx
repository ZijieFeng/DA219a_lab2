import React from 'react'

import Rectangle from './rectangle'

const SkeletonDate = ({ animation }) => (
  <Rectangle
    animation={animation}
    placeholder='Nov 13 2020'
  />
)

export default SkeletonDate
