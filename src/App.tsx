import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes/Router'

import { GlobalStyle } from './shared/styles/global'
import { CoffeProvider } from './shared/hooks/coffe'
import { ThemeProvider } from '@mui/material'
import { DefaultTheme } from './shared/styles/themes/Default'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <CoffeProvider>
          <Router />
        </CoffeProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
