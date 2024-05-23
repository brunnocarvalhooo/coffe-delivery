import { Box, Theme, styled } from '@mui/material'

export const IntroContainer = styled(Box)(() => ({
  width: '100%',
  height: '550px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '50px',
  padding: '0 60px',

  '& > img': {
    position: 'absolute',
    zIndex: '-1',
    width: '100%',
    objectFit: 'cover',
  },

  '@media (max-width: 600px)': {
    marginTop: '30px',
  },
}))

export const TitleContainer = styled(Box)(({ theme }) => ({
  '& h1': {
    fontFamily: 'Baloo 2',
    fontSize: '2.5rem',

    '@media (max-width: 500px)': {
      fontSize: '2rem',
    },
  },

  '& p': {
    fontFamily: 'Roboto',
    fontSize: '1.25rem',
    color: theme.palette.grey[200],
    marginBottom: '70px',
  },
}))

export const ItemsContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 2fr)',
  gap: '20px',

  '@media (max-width: 800px)': {
    gridTemplateColumns: 'repeat(1, 2fr)',
  },
}))

interface ItemProps {
  variant: 'cart' | 'package' | 'timer' | 'coffe'
  theme: Theme
}

export const Item = styled(Box)(({ variant, theme }: ItemProps) => ({
  display: 'flex',
  alignItems: 'center',

  '& svg': {
    width: '40px',
    height: '40px',
    padding: '10px',
    borderRadius: '50%',
    marginRight: '10px',
    color: theme.palette.grey[900],
    background: (() => {
      switch (variant) {
        case 'cart':
          return theme.palette.primary.dark
        case 'package':
          return theme.palette.grey[300]
        case 'timer':
          return theme.palette.primary.main
        case 'coffe':
          return theme.palette.secondary.main
        default:
          return ''
      }
    })(),
  },

  '& span': {
    fontFamily: 'Roboto',
    color: theme.palette.grey[300],

    '@media (max-width: 500px)': {
      fontSize: '0.75rem',
    },
  },
}))

export const CupContainer = styled(Box)(() => ({
  '@media (max-width: 1100px)': {
    '& img': {
      display: 'none',
    },
  },
}))

export const CoffeListContainer = styled(Box)(() => ({
  marginTop: '12px',

  '& h1': {
    fontFamily: 'Baloo 2',
    marginBottom: '40px',
    marginLeft: '5vw',

    '@media (max-width: 600px)': {
      marginTop: '80px',
    },
  },
}))

export const NavigationButtonContainer = styled(Box)(() => ({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  zIndex: '0',

  '@media (max-width: 600px)': {
    display: 'none',
  },
}))

interface NavigationButtonProps {
  variant: 'back' | 'next'
  theme: Theme
}

export const NavigationButton = styled(Box)(
  ({ variant, theme }: NavigationButtonProps) => ({
    cursor: 'pointer',
    width: '10vw',
    height: '37vh',
    display: 'flex',
    alignItems: 'center',
    background:
      variant === 'back'
        ? 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.0))'
        : 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.0))',

    justifyContent: variant === 'back' ? 'flex-start' : 'flex-end',

    '& svg': {
      color: theme.palette.grey[50],
      marginBottom: '20px',
      marginRight: variant === 'next' ? '10px' : '0',
      marginLeft: variant === 'back' ? '10px' : 'auto',
    },
  }),
)

export const List = styled(Box)(() => ({
  margin: '0 90px 0px 90px',

  position: 'relative',

  '& img': {
    position: 'absolute',
    zIndex: '1',
    marginLeft: '110px',
    display: 'flex',
    justifyContent: 'center',

    '@media (max-width: 600px)': {
      marginLeft: '66px',
    },
  },

  display: 'flex',
  overflowX: 'auto',

  '@media (max-width: 600px)': {
    margin: '0',
    paddingLeft: '10vw',
    paddingRight: '10vw',
    gap: '50px',
  },
}))

export const CoffeCardContainer = styled(Box)(({ theme }) => ({
  background: theme.palette.grey[700],
  width: '256px',
  height: '310px',
  borderRadius: '8px 42px 8px 42px',
  margin: '20px 40px 30px 40px',
  position: 'relative',

  '@media (max-width: 600px)': {
    margin: '20px 0 30px 0',
  },
}))

export const CoffeCardContent = styled(Box)(({ theme }) => ({
  maxWidth: '250px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'absolute',
  margin: '120px 10px 0 10px',

  '& h3': {
    fontFamily: 'Baloo 2',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },

  '& span': {
    fontFamily: 'Roboto',
    color: theme.palette.grey[300],
  },
}))

export const Tag = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '5px',
  marginBottom: '10px',

  '& span': {
    color: theme.palette.primary.main,
    background: theme.palette.primary.light,
    fontFamily: 'Roboto',
    fontSize: '0.75rem',
    padding: '2px 10px',
    borderRadius: '24px',
  },
}))

export const BuyContainer = styled(Box)(({ theme }) => ({
  marginTop: '15px',
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',

  '& > p': {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Roboto',
    color: theme.palette.grey[200],

    '& h4': {
      fontFamily: 'Baloo 2',
      fontSize: '26px',
      marginLeft: '5px',
    },
  },

  '& > div': {
    width: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    background: theme.palette.grey[500],
    borderRadius: '8px',
    marginX: '5px',

    '& > button': {
      cursor: 'pointer',
      border: 'none',
      background: 'transparent',
      color: theme.palette.secondary.main,
      fontSize: '26px',

      '&:hover': {
        color: theme.palette.secondary.dark,
      },

      '&:disabled': {
        color: theme.palette.text.disabled,
      },
    },
  },

  '& > button': {
    cursor: 'pointer',
    border: 'none',
    background: theme.palette.secondary.main,
    color: theme.palette.grey[900],
    fontSize: '22px',
    padding: '5px 10px 0 10px',
    borderRadius: '8px',
    transition: 'background 0.6s',

    '& svg': {
      marginTop: '5px',
    },

    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
}))
