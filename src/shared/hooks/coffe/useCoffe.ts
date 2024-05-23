import { useContext } from 'react'
import { CoffeContext, ICoffeContextData } from '.'

function useCoffe(): ICoffeContextData {
  const context = useContext(CoffeContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

export { useCoffe }
