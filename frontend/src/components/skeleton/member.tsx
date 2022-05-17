import React from 'react'
import Circle from './circle'
import Rectangle from './rectangle'

import useStyles from './styles'

const Member = ({ animation }) => {
  const classes = useStyles()

  return (
    <div className={classes.member}>
      <Circle animation={animation} />
      <Rectangle
        animation={animation}
        placeholder='Olius Ramazzotti'
      />
    </div>
  )
}

export default Member
