import React from 'react'

import Age from './age'
import Apartment from './apartment'
import Circle from './circle'
import Member from './member'
import Note from './note'
import Rectangle from './rectangle'
import SkeletonDate from './skeleton-date'
import Unit from './unit'

import { ISkeletonProps } from './interfaces'

const variants = {
  age: Age,
  apartment: Apartment,
  circle: Circle,
  date: SkeletonDate,
  member: Member,
  note: Note,
  rectangle: Rectangle,
  unit: Unit,
}

const Skeleton = ({ animation, variant }: ISkeletonProps) => {
  const Variant = variants[variant]

  return (
    <Variant animation={animation} />
  )
}

export { default as Age } from './age'
export { default as Circle } from './circle'
export { default as Member } from './member'
export { default as Rectangle } from './rectangle'
export { default as SkeletonDate } from './skeleton-date'

export default Skeleton
