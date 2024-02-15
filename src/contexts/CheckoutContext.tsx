import { createContext, ReactNode, useEffect, useReducer } from 'react'

interface ICheckoutContext {
  cep: string
  rua: string
  numero: number
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  pagamento: number
}

const CheckoutContext = createContext({} as ICheckoutContext)

interface ICheckoutContextProvider {
  children: ReactNode
}

export default function CheckoutContext({ children }: ICheckoutContext) {
  const [checkoutState, dispach] = useReducer(
    checkoutReducer,
    {
      cep: '',
      rua: '',
      numero: 0,
      bairro: '',
      cidade: '',
      uf: '',
      pagamento: 0,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:checkout-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { cep, rua, numero, complemento, bairro, cidade, uf, pagamento } =
    checkoutState

  useEffect(() => {
    const stateJSON = JSON.stringify(checkoutState)

    localStorage.setItem('@ignite-timer:checkout-state-1.0.0', stateJSON)
  }, [checkoutState])

  function updateForm(campo, valor)
}
