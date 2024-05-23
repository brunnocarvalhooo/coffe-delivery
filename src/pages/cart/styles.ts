import { styled, Box, Card, Button } from '@mui/material'

export const CartContainer = styled(Box)(() => ({
  margin: '0 auto',
  width: 'calc(100vw - 24vw)',

  '@media (max-width: 600px)': {
    width: 'calc(100vw - 10vw)',
  },
}))

export const CardContainer = styled(Card)(({ theme }) => ({
  padding: '40px',
  boxShadow: 'none',
  background: theme.palette.grey[700],
  borderRadius: 4,
  marginBottom: 12,

  '@media (max-width: 600px)': {
    padding: '8vw',
  },
}))

export const CartItemsContainer = styled(Card)(({ theme }) => ({
  padding: '40px',
  boxShadow: 'none',
  background: theme.palette.grey[700],
  borderRadius: '4px 42px 4px 42px',
  marginBottom: 12,

  '@media (max-width: 600px)': {
    padding: '8vw',
  },
}))

export const TitleContainer = styled(Box)(({ theme }) => ({
  '& .title': {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: 18,
    marginBottom: 6,
  },

  '& .sub-title': {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 32,
    marginLeft: 6,
    color: theme.palette.grey[200],
  },
}))

export const PaymentButton = styled(Button)<{ selected: boolean }>(
  ({ theme, selected }) => ({
    display: 'flex',
    alignItems: 'center',
    background: selected
      ? theme.palette.secondary.light
      : theme.palette.grey[500],
    color: theme.palette.grey[200],
    fontWeight: 'normal',
    fontSize: 12,
    width: '100%',
    padding: '15px 4px',
    transition: 'background 0.3s',
    border: '1px solid',
    borderColor: selected
      ? theme.palette.secondary.main
      : theme.palette.grey[500],

    '&:hover': {
      background: selected
        ? theme.palette.secondary.light
        : theme.palette.grey[400],
    },
  }),
)

export const CartItem = styled(Box)(() => ({
  display: 'flex',

  '& > img': {
    width: '76px',
    marginRight: 20,
  },
}))

export const ProductAndPrice = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 10,

  '& .product-name': {
    fontWeight: '1.25rem',
  },

  '& .product-price': {
    fontWeight: 'bold',
    color: theme.palette.grey[200],
  },
}))

export enum PaymentType {
  CREDIT_CARD = 'Cartão de crédito',
  DEBIT_CARD = 'Cartão de débito',
  MONEY = 'Dinheiro',
  EMPTY = '',
}

export const RemoveButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: theme.palette.grey[500],
  color: theme.palette.grey[200],
  fontWeight: 'normal',
  padding: '5px 8px',
  transition: 'background 0.3s',
  border: '1px solid',
  borderColor: theme.palette.grey[500],
  borderRadius: '8px',

  '&:hover': {
    background: theme.palette.grey[400],
  },
}))

export const QuantityContainer = styled(Box)(({ theme }) => ({
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
    fontSize: '24px',

    '&:hover': {
      color: theme.palette.secondary.dark,
    },

    '&:disabled': {
      color: theme.palette.text.disabled,
    },
  },
}))

export const EmptyCardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '& > img': {
    width: '170px',
  },

  '& > h1': {
    marginTop: '20px',
    color: theme.palette.grey[200],
  },

  '& > span': {
    color: theme.palette.grey[300],
    textAlign: 'center',
  },

  '& > a': {
    marginTop: '20px',
    fontSize: '0.90rem',
    color: theme.palette.secondary.dark,

    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
}))

export const TotalPrice = styled(Box)<{ variant: 'total' | 'aggregate' }>(
  ({ variant }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    marginBottom: '6px',

    '& p': {
      fontWeight: variant === 'total' ? 'bold' : undefined,
      fontSize: variant === 'total' ? '1.25rem' : '1rem',
    },
  }),
)

export const SubmitButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.grey[900],
  padding: '10px',
  borderRadius: 6,
  transition: 'background 0.15s',
  marginTop: 20,

  '&:hover': {
    background: theme.palette.primary.dark,
  },
}))
