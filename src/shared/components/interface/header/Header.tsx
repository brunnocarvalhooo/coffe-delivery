import coffeDeliveryLogo from '../../../../assets/coffe-delivery-logo.svg'

import { IoIosPin } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'

import { HeaderContainer, Info, LocaleCardContainer } from './styles'
import { useCoffe } from '../../../hooks/coffe/useCoffe'
import { Link, useNavigate } from 'react-router-dom'
import {
  Badge,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

export function Header() {
  const { cart, paymentAndDeliveryData } = useCoffe()

  const theme = useTheme()
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const navigate = useNavigate()

  return (
    <HeaderContainer theme={theme}>
      <Tooltip
        title={
          <Typography color={theme.palette.text.primary}>
            Voltar ao menu
          </Typography>
        }
        placement="right"
      >
        <Link to={'/'}>
          <img style={{ marginLeft: '12vw' }} src={coffeDeliveryLogo} alt="" />
        </Link>
      </Tooltip>

      <Info>
        <Tooltip
          title={
            <Typography color={theme.palette.text.primary}>
              {paymentAndDeliveryData.cidade || paymentAndDeliveryData.uf
                ? `${paymentAndDeliveryData.cidade} ${paymentAndDeliveryData.uf && ','} ${paymentAndDeliveryData.uf}`
                : 'Informe sua localiação entrando no carrinho'}
            </Typography>
          }
          placement="bottom"
        >
          <LocaleCardContainer theme={theme} elevation={0}>
            <Typography>
              <IoIosPin size={26} />
            </Typography>

            {!smDown &&
              (paymentAndDeliveryData.cidade ||
              paymentAndDeliveryData.uf.length === 2 ? (
                <Typography color={theme.palette.text.primary}>
                  {`${paymentAndDeliveryData.cidade} ${paymentAndDeliveryData.uf && ','} ${paymentAndDeliveryData.uf}`}
                </Typography>
              ) : (
                <></>
              ))}
          </LocaleCardContainer>
        </Tooltip>

        <Tooltip
          title={
            <Typography color={theme.palette.text.primary}>Carrinho</Typography>
          }
          placement="bottom"
        >
          <button onClick={() => navigate('/cart')}>
            <Badge badgeContent={cart.length} color="primary">
              <FaShoppingCart />
            </Badge>
          </button>
        </Tooltip>
      </Info>
    </HeaderContainer>
  )
}
