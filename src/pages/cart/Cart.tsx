import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Alert, Header, VTextField } from '../../shared/components'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { useCallback, useRef, useState } from 'react'
import { useCoffe } from '../../shared/hooks/coffe/useCoffe'
import {
  CardContainer,
  CartContainer,
  CartItem,
  CartItemsContainer,
  EmptyCardContainer,
  PaymentButton,
  PaymentType,
  ProductAndPrice,
  QuantityContainer,
  RemoveButton,
  SubmitButton,
  TitleContainer,
  TotalPrice,
} from './styles'
import {
  PiMapPinLineLight,
  PiCurrencyDollarLight,
  PiBank,
  PiMoney,
} from 'react-icons/pi'
import { FaRegCreditCard } from 'react-icons/fa6'
import { LiaTrashAlt } from 'react-icons/lia'

import ET from '../../assets/coffe-images/ExpressoTradicional.svg'
import emptyCard from '../../assets/empty-cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import { IpaymentAndDeliveryDataProps } from '../../shared/hooks/coffe'

import * as Yup from 'yup'
import getValidationErrors from '../../shared/utils/getValidationErrors'
import { useAlert } from '../../shared/hooks/alert'

export function Cart() {
  const [isLoading, setIsLoading] = useState(false)

  const formAddressRef = useRef<FormHandles>(null)

  const navigate = useNavigate()

  const {
    cart,
    handleRemoveItemFromCart,
    handleChangeQuantityCoffeOfCart,
    paymentAndDeliveryData,
    setPaymentAndDeliveryData,
  } = useCoffe()

  const { alert, showAlert } = useAlert()

  const theme = useTheme()
  const xlUp = useMediaQuery(theme.breakpoints.up('xl'))

  const handleSubmit = useCallback(
    async (data: IpaymentAndDeliveryDataProps) => {
      try {
        formAddressRef.current?.setErrors({})
        setIsLoading(true)

        const schema = Yup.object().shape({
          bairro: Yup.string().required('Bairro é um campo obrigatório'),
          cep: Yup.string()
            .required('CEP é um campo obrigatório')
            .length(9, 'CEP deve conter 8 caracteres'),
          cidade: Yup.string().required('Cidade é um campo obrigatório'),
          numero: Yup.string().required('Número é um campo obrigatório'),
          rua: Yup.string().required('Rua é um campo obrigatório'),
          uf: Yup.string()
            .required('UF é um campo obrigatório')
            .length(2, 'UF deve conter 2 caracteres'),
        })

        await schema.validate(data, { abortEarly: false })

        setPaymentAndDeliveryData({
          ...data,
          selectedPayment: paymentAndDeliveryData.selectedPayment,
        })

        if (paymentAndDeliveryData.selectedPayment === PaymentType.EMPTY) {
          showAlert({
            variant: 'error',
            message: 'Selecione a forma de pagamento',
          })

          setIsLoading(false)

          return
        }

        navigate('/success')

        setIsLoading(false)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formAddressRef.current?.setErrors(errors)
        }

        setIsLoading(false)
      }
    },
    [
      navigate,
      paymentAndDeliveryData.selectedPayment,
      setPaymentAndDeliveryData,
      showAlert,
    ],
  )

  return (
    <Box marginBottom={6}>
      <Header />

      <CartContainer>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={7}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box marginBottom={1}>
                  <h2>Complete seu pedido</h2>
                </Box>

                <CardContainer>
                  <TitleContainer>
                    <Typography className="title">
                      <PiMapPinLineLight
                        size={28}
                        color={theme.palette.primary.main}
                      />
                      Endereço de Entrega
                    </Typography>
                    <Typography className="sub-title">
                      Informe o endereço onde deseja receber seu pedido
                    </Typography>
                  </TitleContainer>

                  <Form
                    ref={formAddressRef}
                    onSubmit={handleSubmit}
                    placeholder=""
                    initialData={paymentAndDeliveryData}
                  >
                    <Grid container spacing={3}>
                      <Grid item xs={5} md={4}>
                        <VTextField
                          name="cep"
                          placeholder="CEP"
                          inputProps={{ maxLength: 9 }}
                          onChange={(e) =>
                            setPaymentAndDeliveryData({
                              ...paymentAndDeliveryData,
                              cep: e.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <VTextField
                          name="rua"
                          placeholder="Rua"
                          onChange={(e) =>
                            setPaymentAndDeliveryData({
                              ...paymentAndDeliveryData,
                              rua: e.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={4}>
                        <VTextField
                          name="numero"
                          placeholder="Número"
                          type="number"
                          onChange={(e) =>
                            setPaymentAndDeliveryData({
                              ...paymentAndDeliveryData,
                              numero: e.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={8}>
                        <VTextField
                          name="bairro"
                          placeholder="Bairro"
                          onChange={(e) =>
                            setPaymentAndDeliveryData({
                              ...paymentAndDeliveryData,
                              bairro: e.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={6} md={5}>
                        <VTextField
                          name="complemento"
                          placeholder="Complemento"
                          onChange={(e) =>
                            setPaymentAndDeliveryData({
                              ...paymentAndDeliveryData,
                              complemento: e.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={6} md={5}>
                        <VTextField
                          name="cidade"
                          placeholder="Cidade"
                          onChange={(e) =>
                            setPaymentAndDeliveryData({
                              ...paymentAndDeliveryData,
                              cidade: e.target.value,
                            })
                          }
                        />
                      </Grid>

                      <Grid item xs={12} md={2}>
                        <VTextField
                          name="uf"
                          placeholder="UF"
                          inputProps={{ maxLength: 2 }}
                          onChange={(e) =>
                            setPaymentAndDeliveryData({
                              ...paymentAndDeliveryData,
                              uf: e.target.value,
                            })
                          }
                        />
                      </Grid>
                    </Grid>
                  </Form>
                </CardContainer>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <CardContainer>
                <TitleContainer>
                  <Typography className="title">
                    <PiCurrencyDollarLight
                      size={28}
                      color={theme.palette.secondary.main}
                    />
                    Pagamento
                  </Typography>
                  <Typography className="sub-title">
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </Typography>
                </TitleContainer>

                <Box display="flex" justifyContent="space-between">
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                      <PaymentButton
                        selected={
                          paymentAndDeliveryData.selectedPayment ===
                          PaymentType.CREDIT_CARD
                        }
                        onClick={() =>
                          setPaymentAndDeliveryData({
                            ...paymentAndDeliveryData,
                            selectedPayment: PaymentType.CREDIT_CARD,
                          })
                        }
                      >
                        <FaRegCreditCard
                          size={14}
                          color={theme.palette.secondary.main}
                          style={{ marginRight: 6 }}
                        />
                        Cartão de crédito
                      </PaymentButton>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <PaymentButton
                        selected={
                          paymentAndDeliveryData.selectedPayment ===
                          PaymentType.DEBIT_CARD
                        }
                        onClick={() =>
                          setPaymentAndDeliveryData({
                            ...paymentAndDeliveryData,
                            selectedPayment: PaymentType.DEBIT_CARD,
                          })
                        }
                      >
                        <PiBank
                          size={16}
                          color={theme.palette.secondary.main}
                          style={{ marginRight: 6 }}
                        />
                        cartão de débito
                      </PaymentButton>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <PaymentButton
                        selected={
                          paymentAndDeliveryData.selectedPayment ===
                          PaymentType.MONEY
                        }
                        onClick={() =>
                          setPaymentAndDeliveryData({
                            ...paymentAndDeliveryData,
                            selectedPayment: PaymentType.MONEY,
                          })
                        }
                      >
                        <PiMoney
                          size={16}
                          color={theme.palette.secondary.main}
                          style={{ marginRight: 6 }}
                        />
                        Dinheiro
                      </PaymentButton>
                    </Grid>
                  </Grid>
                </Box>
              </CardContainer>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Box marginBottom={1}>
              <h2>Cafés selecionados</h2>
            </Box>

            <CartItemsContainer>
              {cart.length !== 0 ? (
                <>
                  <Box>
                    {cart.map((product) => (
                      <Box key={product.id}>
                        <CartItem>
                          {xlUp && <img src={ET} alt="" />}

                          <Box width="100%">
                            <ProductAndPrice>
                              <Typography className="product-name">
                                {product.name}
                              </Typography>
                              <Typography className="product-price">
                                R${' '}
                                {(
                                  (product.price / 100) *
                                  product.quantity
                                ).toFixed(2)}
                              </Typography>
                            </ProductAndPrice>

                            <Box display="flex" gap={1}>
                              <QuantityContainer>
                                <button
                                  disabled={product.quantity === 1}
                                  onClick={() =>
                                    handleChangeQuantityCoffeOfCart(
                                      product,
                                      'remove',
                                    )
                                  }
                                >
                                  -
                                </button>
                                <span>{product.quantity}</span>
                                <button
                                  onClick={() =>
                                    handleChangeQuantityCoffeOfCart(
                                      product,
                                      'add',
                                    )
                                  }
                                >
                                  +
                                </button>
                              </QuantityContainer>
                              <RemoveButton
                                onClick={() =>
                                  handleRemoveItemFromCart(product)
                                }
                              >
                                <LiaTrashAlt
                                  size={16}
                                  color={theme.palette.secondary.main}
                                  style={{ marginRight: 6 }}
                                />
                                Remover
                              </RemoveButton>
                            </Box>
                          </Box>
                        </CartItem>

                        <Divider sx={{ marginY: 3, width: '100%' }} />
                      </Box>
                    ))}
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Box>
                      <TotalPrice variant="aggregate">
                        <Typography>Total de itens</Typography>
                        <Typography>
                          RS{' '}
                          {(
                            cart.reduce(
                              (total, item) =>
                                total + item.price * item.quantity,
                              0,
                            ) / 100
                          ).toFixed(2)}
                        </Typography>
                      </TotalPrice>
                      <TotalPrice variant="aggregate">
                        <Typography>Entrega</Typography>
                        <Typography>
                          RS {((100 * 1 * 10) / 100).toFixed(2)}
                        </Typography>
                      </TotalPrice>
                      <TotalPrice variant="total">
                        <Typography>Total</Typography>
                        <Typography>
                          RS{' '}
                          {(
                            cart.reduce(
                              (total, item) =>
                                total + item.price * item.quantity,
                              0,
                            ) /
                              100 +
                            (100 * 1 * 10) / 100
                          ).toFixed(2)}
                        </Typography>
                      </TotalPrice>
                    </Box>

                    <SubmitButton
                      onClick={() => formAddressRef.current?.submitForm()}
                    >
                      {isLoading ? (
                        <CircularProgress
                          size={25}
                          sx={{ color: theme.palette.grey[900] }}
                        />
                      ) : (
                        'Confirmar Pedido'
                      )}
                    </SubmitButton>
                  </Box>
                </>
              ) : (
                <EmptyCardContainer>
                  <img src={emptyCard} alt="" />

                  <h1>Carrinho vazio...</h1>

                  <span>
                    Carrinho vazio? volte ao menu, escolha os cafés desejados e
                    adione-os ao carinho. Eles aparecerão aqui.
                  </span>

                  <Link to={'/'}>Voltar ao menu</Link>
                </EmptyCardContainer>
              )}
            </CartItemsContainer>
          </Grid>
        </Grid>
      </CartContainer>

      {alert && <Alert message={alert.message} severity={alert.variant} />}
    </Box>
  )
}
