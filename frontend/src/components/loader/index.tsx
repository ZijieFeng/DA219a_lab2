import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

import useStyles from './styles'

export default function Loader({ loaded, children }) {
  const classes = useStyles()

  if (!loaded) {
    return (
      <div className={classes.progressWrap}>
        <CircularProgress color='secondary' className={classes.progress} />
      </div>
    )
  }

  return children
}
