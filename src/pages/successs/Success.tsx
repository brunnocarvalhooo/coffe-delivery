import { Box, Typography, useTheme } from '@mui/material'
import { Header } from '../../shared/components'

import successImg from '../../assets/success.svg'
import { useCoffe } from '../../shared/hooks/coffe/useCoffe'
import {
  CardItems,
  Item,
  ItemsContainer,
  SuccessContainer,
  Title,
} from './styles'

import { IoMdPin } from 'react-icons/io'
import { PiTimerFill, PiCurrencyDollarLight } from 'react-icons/pi'
import { Link } from 'react-router-dom'

export function Success() {
  const theme = useTheme()

  const { paymentAndDeliveryData, handleResetUseCoffe } = useCoffe()

  return (
    <Box
      sx={{
        marginBottom: '5vw',

        '& > a': {
          marginTop: '20px',
          marginLeft: '18vw',
          fontSize: '0.90rem',
          color: theme.palette.secondary.dark,

          '&:hover': {
            color: theme.palette.secondary.main,
          },
        },
      }}
    >
      <Header />

      <SuccessContainer>
        <Box>
          <Title>
            <h1>Uhu! Pedido confirmado</h1>
            <Typography>
              Agora é só aguardar que logo o café chegará até você
            </Typography>
          </Title>

          <CardItems>
            <ItemsContainer>
              <Item theme={theme} variant="delivery">
                <IoMdPin />
                <span>
                  {paymentAndDeliveryData.selectedPayment === '' ? (
                    <strong>forneça seu endereço</strong>
                  ) : (
                    <span>
                      Entrega em{' '}
                      <strong>
                        {paymentAndDeliveryData.rua},{' '}
                        {paymentAndDeliveryData.numero}
                      </strong>
                      <br />
                      {paymentAndDeliveryData.bairro} -{' '}
                      {paymentAndDeliveryData.cidade},{' '}
                      {paymentAndDeliveryData.uf}
                    </span>
                  )}
                </span>
              </Item>

              <Item theme={theme} variant="time">
                <PiTimerFill />
                <span>
                  {paymentAndDeliveryData.selectedPayment === '' ? (
                    <strong>Selecione cafés</strong>
                  ) : (
                    <span>
                      Previsão de entrega <br />
                      <strong>20 min - 30 min</strong>
                    </span>
                  )}
                </span>
              </Item>

              <Item theme={theme} variant="payment">
                <PiCurrencyDollarLight />
                <span>
                  {paymentAndDeliveryData.selectedPayment === '' ? (
                    <strong>Selecione o método de pagamento</strong>
                  ) : (
                    <span>
                      Pagamento na entrega <br />
                      <strong>{paymentAndDeliveryData.selectedPayment}</strong>
                    </span>
                  )}
                </span>
              </Item>
            </ItemsContainer>
          </CardItems>
        </Box>

        <Box
          sx={{
            '& > img': {
              width: 'calc(100vw - 70vw)',

              '@media (max-width: 600px)': {
                width: 'calc(100vw - 30vw)',
              },

              '@media (max-width: 1200px)': {
                width: 'calc(100vw - 30vw)',
              },
            },
          }}
        >
          <img src={successImg} alt="" />
        </Box>
      </SuccessContainer>

      <Link to={'/'} onClick={handleResetUseCoffe}>
        Voltar ao menu
      </Link>
    </Box>
  )
}
