import { useEffect, useState, FC } from 'react'
import { TextFieldProps, Typography } from '@mui/material'
import { useField } from '@unform/core'

import { formatCEP } from '../../../utils/masks'
import { CartItemsContainer } from './styles'

type VTextFieldProps = TextFieldProps & {
  name: string
  label?: string
}

export const VTextField: FC<VTextFieldProps> = ({ name, label, ...rest }) => {
  const { fieldName, registerField, defaultValue, error, clearError } =
    useField(name)

  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      getValue: () => value,
      setValue: (_, newValue) => setValue(newValue),
    })

    if (fieldName === 'cep') {
      setValue(formatCEP(value))
    }
  }, [registerField, fieldName, value])

  return (
    <>
      <CartItemsContainer
        {...rest}
        sx={{ zIndex: 0 }}
        title={label}
        fullWidth
        label={label}
        error={!!error}
        // helperText={error}
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value)
          rest.onChange?.(e)
        }}
        onKeyDown={(e) => {
          error && clearError()
          rest.onKeyDown?.(e)
        }}
      />
      <Typography
        style={{ color: '#cc2929', fontSize: '0.75rem', margin: '5px 10px' }}
      >
        {error}
      </Typography>
    </>
  )
}
