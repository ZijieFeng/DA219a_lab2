import React from 'react'

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) { return order }
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

function getSorting(order, orderBy, getFeilds?) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy, getFeilds) : (a, b) => -desc(a, b, orderBy, getFeilds)
}

function desc(a, b, orderBy, getFeilds?) {
  const get = getFeilds && getFeilds[orderBy]

  const mappedA = get ? get(a) : a[orderBy]
  const mappedB = get ? get(b) : b[orderBy]

  if (mappedB < mappedA) {
    return -1
  }
  if (mappedB > mappedA) {
    return 1
  }
  return 0
}

interface IState {
  order: 'asc' | 'desc'
  orderBy: string
}

export function commonChangeOrder<T extends IState>(state: T, orderBy: string) {
  const order = orderBy !== state.orderBy ? 'desc' : state.order === 'desc' ? 'asc' : 'desc'

  return {
    ...state,
    order,
    orderBy,
  }
}

export default function useSorting(order: 'asc' | 'desc', orderBy: string, getFeilds?) {
  const [state, setState] = React.useState({ order, orderBy })

  function handleRequestSort(property: string) {
    setState(commonChangeOrder(state, property))
  }

  function sort(data) {
    return stableSort(data, getSorting(state.order, state.orderBy, getFeilds))
  }

  return {
    ...state,
    handleRequestSort,
    sort,
  }
}
