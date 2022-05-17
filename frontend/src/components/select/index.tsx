import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText'

interface IProps {
  field: any
  label?: string
  helperText?: string
  disabled?: boolean
  onChange?: (e) => void
  className?: string
  rootClassName?: string
  children: any
  variant?: 'filled' | 'outlined' | 'standard'
  fullWidth?: boolean
  style?: any
  FormHelperTextProps?: FormHelperTextProps
}

export default ({ field, label, variant, helperText, disabled, onChange, fullWidth, className, rootClassName, children, style, FormHelperTextProps }: IProps) => {
  const inputLabel = React.useRef<HTMLLabelElement>(null)
  const [labelWidth, setLabelWidth] = React.useState(0)

  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth + 16)
  }, [])

  const isError = field.meta.error && field.meta.touched

  return (
    <FormControl className={className} variant={variant} fullWidth={fullWidth} style={style} error={isError}>
      <InputLabel error={isError} ref={inputLabel}>{label}</InputLabel>
      <Select
        {...field.input}
        disabled={disabled}
        onChange={onChange || field.input.onChange}
        labelWidth={labelWidth}
        classes={{
          root: rootClassName,
        }}
      >
        {children}
      </Select>
      {
        helperText && !(isError) && (
          <FormHelperText>{helperText}</FormHelperText>
        )
      }
      {isError && (
        // <Box marginTop={1}>
        <FormHelperText error={true} {...FormHelperTextProps}>{field.meta.error}</FormHelperText>
        // </Box>
      )}
    </FormControl>
  )
}
