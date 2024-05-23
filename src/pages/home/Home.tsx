import { PiTimerFill, PiPackageFill, PiCoffeeFill } from 'react-icons/pi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

import { FaCartShopping } from 'react-icons/fa6'
import { useRef, useState } from 'react'

import { useCoffe } from '../../shared/hooks/coffe/useCoffe'
import { Alert, Header } from '../../shared/components'

import {
  BuyContainer,
  CoffeCardContainer,
  CoffeCardContent,
  CoffeListContainer,
  CupContainer,
  IntroContainer,
  Item,
  ItemsContainer,
  List,
  NavigationButton,
  NavigationButtonContainer,
  Tag,
  TitleContainer,
} from './styles'

import ET from '../../assets/coffe-images/ExpressoTradicional.svg'
import cup from '../../assets/cup.svg'
import bg from '../../assets/bg.svg'
import { ToastContainer } from 'react-toastify'
import { Box, useTheme } from '@mui/material'
import { useAlert } from '../../shared/hooks/alert'

export function Home() {
  const { coffeList, handleAddToCart, handleChangeQuantityCoffe } = useCoffe()

  const theme = useTheme()

  const { alert, showAlert } = useAlert()

  const [, setScrollLeft] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)

  const handleScroll = (scrollOffset: number) => {
    if (listRef.current) {
      const newScrollLeft = listRef.current.scrollLeft + scrollOffset
      listRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' })
      setScrollLeft(newScrollLeft)
    }
  }

  return (
    <Box>
      <Header />

      <IntroContainer>
        <TitleContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ItemsContainer>
            <Item theme={theme} variant="cart">
              <FaCartShopping />
              <span>Compra simples e segura</span>
            </Item>

            <Item theme={theme} variant="package">
              <PiPackageFill />
              <span>Embalagem mantém o café intacto</span>
            </Item>

            <Item theme={theme} variant="timer">
              <PiTimerFill />
              <span>Entrega rápida e rastreada</span>
            </Item>

            <Item theme={theme} variant="coffe">
              <PiCoffeeFill />
              <span>O café chega fresquinho até você</span>
            </Item>
          </ItemsContainer>
        </TitleContainer>

        <CupContainer>
          <img src={cup} alt="" />
        </CupContainer>

        <img src={bg} alt="" />
      </IntroContainer>

      <CoffeListContainer>
        <h1>Nossos Cafés</h1>

        <NavigationButtonContainer>
          <NavigationButton
            theme={theme}
            variant="back"
            onClick={() => {
              const displacement =
                -window.innerWidth - (window.innerWidth / 100) * 2
              handleScroll(displacement)
            }}
          >
            <IoIosArrowBack size={50} />
          </NavigationButton>
          <NavigationButton
            theme={theme}
            variant="next"
            onClick={() => {
              const displacement =
                window.innerWidth - (window.innerWidth / 100) * 2

              handleScroll(displacement)
            }}
          >
            <IoIosArrowForward size={50} />
          </NavigationButton>
        </NavigationButtonContainer>

        <List ref={listRef}>
          {coffeList.map((coffe, index) => (
            <div key={index}>
              <img src={ET} alt="" />
              <CoffeCardContainer>
                <CoffeCardContent>
                  <Tag>
                    {coffe.tags.map((tag) => (
                      <span key={tag}>{tag.toUpperCase()}</span>
                    ))}
                  </Tag>
                  <h3>
                    {coffe.name.length > 20
                      ? `${coffe.name.slice(0, 20)}...`
                      : coffe.name}
                  </h3>
                  <span>
                    {coffe.description.length > 50
                      ? `${coffe.description.slice(0, 50)}...`
                      : coffe.description}
                  </span>
                  <BuyContainer>
                    <p>
                      R$ <h4>{(coffe.price / 100).toFixed(2)}</h4>
                    </p>

                    <div>
                      <button
                        disabled={coffe.quantity === 0}
                        onClick={() =>
                          handleChangeQuantityCoffe(coffe, 'remove')
                        }
                      >
                        -
                      </button>
                      <span>{coffe.quantity}</span>
                      <button
                        onClick={() => handleChangeQuantityCoffe(coffe, 'add')}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        if (coffe.quantity === 0) {
                          showAlert({
                            variant: 'error',
                            message:
                              'Selecione a quantidade desejada antes de enviar para o carrinho',
                          })

                          return
                        }
                        handleAddToCart(coffe)
                      }}
                    >
                      <FaCartShopping />
                    </button>
                  </BuyContainer>
                </CoffeCardContent>
              </CoffeCardContainer>
            </div>
          ))}
        </List>
      </CoffeListContainer>
      <ToastContainer />

      {alert && <Alert message={alert.message} severity={alert.variant} />}
    </Box>
  )
}
