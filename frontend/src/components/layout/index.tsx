import React from 'react'
import clsx from 'clsx'

import CssBaseline from '@material-ui/core/CssBaseline'

import useStyles from './styles'

interface IProps {
  className?: string
  children: any
}

function Layout({ className, children }: IProps) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div
        className={classes.content}
      >
        <div className={clsx(classes.contentWrap, className)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
