import React from 'react'
import { difference, uniq } from 'lodash'

export function addOrRemoveOne(array: any[], item: any) {
  const index = array.findIndex(i => i === item)

  if (index === -1) {
    return [...array, item]
  }

  return array.filter(i => i !== item)
}

export function addOrRemoveAll(array: any[], items: any[]) {
  const diff = difference(items, array)

  if (diff.length === 0) {
    return []
  }

  return uniq([...array, ...items])
}

export default function useSelection<T>(map?: (item) => T) {
  const [selected, setSelected] = React.useState<T[]>([])

  const mapWrap = React.useCallback(item => map ? map(item) : item, [map])

  const reset = React.useCallback((values?: any[]) => {
    setSelected(values || [])
  }, [setSelected])

  const selectAll = React.useCallback(data => {
    setSelected(addOrRemoveAll(selected, data.map(mapWrap)))
  }, [mapWrap, selected, setSelected])

  const select = React.useCallback(item => {
    const mappedItem = mapWrap(item)
    const _selected = addOrRemoveOne(selected, mappedItem)

    setSelected(_selected)
  }, [mapWrap, selected, setSelected])

  const multiSelect = React.useCallback(data => {
    const mappedData = data.map(mapWrap)
    const filtered = mappedData.filter(d => selected.find(s => s === d) === undefined)

    if (filtered.length === 0) {
      setSelected(selected.filter(s => mappedData.find(d => d === s) === undefined))
    } else {
      setSelected([...selected, ...filtered])
    }
  }, [mapWrap, selected, setSelected])

  const isSelected = React.useCallback(item => {
    const mappedItem = mapWrap(item)
    return selected.find(s => s === mappedItem) !== undefined
  }, [mapWrap, selected])

  const countMatched = React.useCallback(data => {
    const mappedData = data.map(mapWrap)
    return selected.filter(s => mappedData.find(d => d === s) !== undefined).length
  }, [mapWrap, selected])

  return {
    selected,
    reset,
    selectAll,
    select,
    multiSelect,
    isSelected,
    countMatched,
  }
}
