import { Box, Theme, styled } from '@mui/material'

export const SuccessContainer = styled(Box)(() => ({
  width: 'calc(100vw - 24vw)',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'flex-end',
  margin: '5vh auto',
  gap: '10vw',

  '@media (max-width: 600px)': {
    width: 'calc(100vw - 10vw)',
  },

  '@media (max-width: 1200px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

export const ItemsContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 2fr)',
  gap: '20px',
}))

export const CardItems = styled(Box)(({ theme }) => ({
  padding: '40px',
  border: '1px solid',
  borderRadius: '8px 42px 8px 42px',
  borderColor: theme.palette.secondary.main,
}))

interface ItemProps {
  variant: 'delivery' | 'time' | 'payment'
  theme: Theme
}

export const Item = styled(Box)(({ variant, theme }: ItemProps) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '20px',

  '& svg': {
    width: '40px',
    height: '40px',
    padding: '10px',
    borderRadius: '50%',
    marginRight: '10px',
    color: theme.palette.grey[900],
    background: (() => {
      switch (variant) {
        case 'payment':
          return theme.palette.primary.dark
        case 'time':
          return theme.palette.primary.main
        case 'delivery':
          return theme.palette.secondary.main
      }
    })(),
  },

  '& span': {
    fontFamily: 'Roboto',
    color: theme.palette.grey[300],
  },
}))

export const Title = styled(Box)(({ theme }) => ({
  '& h1': {
    color: theme.palette.primary.dark,
  },

  '& p': {
    marginBottom: '40px',
  },
}))
