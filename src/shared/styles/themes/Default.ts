import { createTheme } from '@mui/material'

export const DefaultTheme = createTheme({
  typography: {
    fontFamily: ['Roboto'].join(','),
  },
  palette: {
    primary: {
      main: '#DBAC2C',
      dark: '#C47F17',
      light: '#F1E9C9',
    },
    secondary: {
      main: '#8047F8',
      dark: '#4B2995',
      light: '#EBE5F9',
    },
    grey: {
      '50': '#272221',
      '100': '#403937',
      '200': '#574F4D',
      '300': '#8D8686',
      '400': '#D7D5D5',
      '500': '#E6E5E5',
      '600': '#EDEDED',
      '700': '#F3F2F2',
      '800': '#FAFAFA',
      '900': '#FFFFFF',
    },
  },
})
