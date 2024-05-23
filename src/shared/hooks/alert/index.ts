import { useState } from 'react'

export type AlertVariant = 'success' | 'error' | 'warning' | 'info'

interface Alert {
  variant: AlertVariant
  message: string
}

export const useAlert = () => {
  const [alert, setAlert] = useState<Alert | null>(null)

  const showAlert = ({ variant, message }: Alert) => {
    setAlert({ variant, message })

    setTimeout(() => {
      setAlert(null)
    }, 5000)
  }

  return {
    alert,
    showAlert,
  }
}
