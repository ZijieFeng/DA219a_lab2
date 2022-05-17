import React from 'react'
import TextField from '@material-ui/core/TextField'

interface IProps {
  field: any
  label?: string
  helperText?: string
  disabled?: boolean
  onChange?: (e) => void
  className?: string
  variant?: 'filled' | 'outlined' | 'standard'
  type?: any
}

export default ({ field, label, helperText, disabled, onChange, className, variant, type }: IProps) => {
  return (
    <TextField
      label={label}
      className={className}
      {...field.input}
      helperText={helperText}
      disabled={disabled}
      onChange={onChange || field.input.onChange}
      margin='normal'
      variant={variant}
      type={type}
    />
  )
}
