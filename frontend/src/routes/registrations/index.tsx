import React from 'react'
import { useParams } from 'react-router-dom'

import Table from './table'

import useStyles from './styles'

import { useSelector, useActions } from 'store'

const REFRESH_INTERVAL = 60000

export default function RegistrationsPage() {
  const classes = useStyles()
  const actions = useActions()

  React.useEffect(() => {
    actions.registration.getRegistrations();
    const interval = setInterval(() => {
      actions.registration.getRegistrations();
    }, REFRESH_INTERVAL)
  }, [])

  return (
    <div className={classes.contentWrap}>
      <Table />
    </div>
  )
}
