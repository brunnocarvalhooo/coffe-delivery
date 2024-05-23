import { Card, Theme } from '@mui/material'
import { styled } from '@mui/system'

export const HeaderContainer = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '32px 0',
  height: '104px',

  button: {
    background: theme.palette.primary.light,
    border: 'none',
    borderRadius: '6px',

    color: theme.palette.primary.dark,
    cursor: 'pointer',
    transition: 'all 0.3s',

    width: '38px',
    height: '38px',

    svg: {
      width: '22px',
      height: '22px',
    },

    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  },
}))

export const Info = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: '12vw',
  gap: '10px',

  '& button': {
    '& .css-1otna5s-MuiBadge-badge': {
      backgroundColor: '#d43422',
      color: '#fff',
    },
    '& .css-grcy4q-MuiBadge-badge': {
      backgroundColor: '#d43422',
      color: '#fff',
    },
  },
}))

export const LocaleCardContainer = styled(Card)(
  ({ theme }: { theme: Theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    boxShadow: 'none',
    background: theme.palette.secondary.light,

    p: {
      height: '38px',
      display: 'flex',
      alignItems: 'center',
      padding: '4px 8px 4px 4px',
      borderRadius: '6px',
      color: theme.palette.secondary.dark,

      svg: {
        color: theme.palette.secondary.main,
        width: '22px',
        marginLeft: '5px',
      },
    },
  }),
)
