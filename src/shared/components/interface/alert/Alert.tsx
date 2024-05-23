import { Box, Alert as MuiAlert } from '@mui/material'
import { AlertVariant } from '../../../hooks/alert'

interface IAlertProps {
  severity: AlertVariant
  message: string
}

export function Alert({ severity, message }: IAlertProps) {
  return (
    <Box
      position="fixed"
      top={0}
      right={0}
      marginTop={4}
      marginRight={4}
      marginLeft={4}
      zIndex={2}
    >
      <MuiAlert sx={{ cursor: 'default' }} variant="filled" severity={severity}>
        {message}
      </MuiAlert>
    </Box>
  )
}
