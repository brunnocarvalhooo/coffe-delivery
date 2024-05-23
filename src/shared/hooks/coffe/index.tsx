import React, { createContext, useCallback, useState } from 'react'
import { coffeListData, coffeListProps } from '../../utils/coffeListData'
import { PaymentType } from '../../../pages/cart/styles'

export interface IpaymentAndDeliveryDataProps {
  selectedPayment: PaymentType
  bairro: string
  cep: string
  cidade: string
  complemento: string
  numero: string
  rua: string
  uf: string
}

export interface ICoffeContextData {
  cart: coffeListProps[]
  setCart: (newValue: coffeListProps[]) => void
  clearCart: () => void
  handleAddToCart: (coffe: coffeListProps) => void
  handleRemoveItemFromCart: (coffe: coffeListProps) => void
  handleChangeQuantityCoffeOfCart: (
    coffe: coffeListProps,
    type: 'remove' | 'add',
  ) => void

  coffeList: coffeListProps[]
  setCoffeList: (newValue: coffeListProps[]) => void
  clearCoffeList: () => void
  handleChangeQuantityCoffe: (
    coffe: coffeListProps,
    type: 'remove' | 'add',
  ) => void

  paymentAndDeliveryData: IpaymentAndDeliveryDataProps
  setPaymentAndDeliveryData: (newValue: IpaymentAndDeliveryDataProps) => void

  handleResetUseCoffe: () => void
}

export const CoffeContext = createContext({} as ICoffeContextData)

interface ICoffeProviderProps {
  children: React.ReactNode
}

export const CoffeProvider: React.FC<ICoffeProviderProps> = ({ children }) => {
  const [coffeList, setCoffeList] = useState<coffeListProps[]>(coffeListData)
  const [cart, setCart] = useState<coffeListProps[] | []>([])
  const [paymentAndDeliveryData, setPaymentAndDeliveryData] = useState({
    selectedPayment: PaymentType.EMPTY,

    bairro: '',
    cep: '',
    cidade: '',
    complemento: '',
    numero: '',
    rua: '',
    uf: '',
  })

  const handleResetUseCoffe = () => {
    setCart([])
    setCoffeList(coffeListData)
    setPaymentAndDeliveryData({
      selectedPayment: PaymentType.EMPTY,
      bairro: '',
      cep: '',
      cidade: '',
      complemento: '',
      numero: '',
      rua: '',
      uf: '',
    })
  }

  const clearCart = useCallback(() => {
    setCart([])
  }, [])

  const clearCoffeList = useCallback(() => {
    setCoffeList(coffeList.map((coffe) => ({ ...coffe, quantity: 0 })))
  }, [coffeList])

  const handleChangeQuantityCoffe = (
    coffe: coffeListProps,
    type: 'remove' | 'add',
  ) => {
    const updatedList = coffeList.map((item) => {
      if (item.id === coffe.id) {
        if (type === 'add') {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return { ...item, quantity: item.quantity - 1 }
        }
      }
      return item
    })
    setCoffeList(updatedList)
  }

  const handleChangeQuantityCoffeOfCart = (
    coffe: coffeListProps,
    type: 'remove' | 'add',
  ) => {
    const updatedList = coffeList.map((item) => {
      if (item.id === coffe.id) {
        if (type === 'add') {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return { ...item, quantity: item.quantity - 1 }
        }
      }
      return item
    })

    const updatedCart = cart.map((item) => {
      if (item.id === coffe.id) {
        if (type === 'add') {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return { ...item, quantity: item.quantity - 1 }
        }
      }
      return item
    })

    setCoffeList(updatedList)
    setCart(updatedCart)
  }

  const handleRemoveItemFromCart = (coffe: coffeListProps) => {
    const updatedCart = cart.filter((item) => item.id !== coffe.id)

    const updatedList = coffeList.map((item) => {
      if (item.id === coffe.id) {
        return { ...item, quantity: 0 }
      }
      return item
    })

    setCart(updatedCart)
    setCoffeList(updatedList)
  }

  const handleAddToCart = (coffe: coffeListProps) => {
    const existingItem = cart.find((item) => item.id === coffe.id)

    if (existingItem) {
      if (existingItem.quantity !== coffe.quantity) {
        const updatedList = cart.map((item) => {
          if (item.id === coffe.id) {
            return { ...item, quantity: coffe.quantity }
          }
          return item
        })
        setCart(updatedList)
      }
    } else {
      setCart([...cart, coffe])
    }
  }

  return (
    <CoffeContext.Provider
      value={{
        cart,
        setCart,
        clearCart,
        handleAddToCart,
        handleRemoveItemFromCart,
        handleChangeQuantityCoffeOfCart,

        coffeList,
        setCoffeList,
        clearCoffeList,
        handleChangeQuantityCoffe,

        paymentAndDeliveryData,
        setPaymentAndDeliveryData,

        handleResetUseCoffe,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
