import clsx from 'clsx'
import React from 'react'

import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Table from 'components/table'

import { useSelector, useActions } from 'store'

import useStyles from './styles'

import useTableColumns from './use-table-columns'

const compareRegistrations = (regA: any, regB: any, compareBy: string) => {
  let aValue = regA[compareBy]
  let bValue = regB[compareBy]

  if (compareBy === 'registration_time') {
    // Sort registration time by date
    aValue = new Date(parseInt(regA[compareBy]))
    bValue = new Date(parseInt(regB[compareBy]))
  }

  if (bValue < aValue) {
    return -1
  }

  if (bValue > aValue) {
    return 1
  }

  return 0
}

export default function RegistrationsTable() {
  const actions = useActions()
  const classes = useStyles()
  const columns = useTableColumns()
  const { registrations, total, order, orderBy } = useSelector(state => ({
    order: state.registration.order,
    orderBy: state.registration.orderBy,
    registrations: state.registration.data,
    total: state.registration.data.length,
  }))

  const filteredData = React.useMemo(
    () => {
      const sorted = registrations.sort((a, b) => {
        const coef = order === 'desc' ? 1 : -1
        return coef * compareRegistrations(a, b, orderBy)
      })

      return sorted
    }, [registrations, order, orderBy]
  )

  const handleRequestSort = React.useCallback(
    (orderBy: string) => {
      actions.registration.changeOrder(orderBy)
    }, [actions]
  )

  const sorting = React.useMemo(
    () => {
      return {
        order,
        orderBy,
        handleRequestSort,
      }
    }, [order, orderBy, handleRequestSort]
  )

  return (
    <Paper className={classes.tablePaper}>
      <div className={classes.tableWrapper}>
        <Toolbar
          className={classes.toolbar}
        >
          <div className={classes.title}>
            <Typography variant='h6' id='tableTitle'>
              {'Registrations'}
            </Typography>
          </div>
          <div className={classes.spacer} />
        </Toolbar>
        <Table
          data={filteredData}
          columns={columns}
          sorting={sorting}
          classNames={classes}
        />
      </div>
    </Paper>
  )
}
