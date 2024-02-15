import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import Cart from '../../components/Cart'
import Button from '../../components/ui/Button'
import { CoffeesContext } from '../../contexts/CoffeeContext'
import { coffeesData } from '../../data/coffees-data'
import { CoffeesType } from '../../interfaces/coffee-interface'
import { Each } from '../../utils/Each'
import { MoneyMask } from '../../utils/MoneyMask'

export default function FinishCheckout() {
  const { addCoffee, coffees, removeCoffee } = useContext(CoffeesContext)

  function getTotalCoffee(taxa?: number) {
    let totalQuantity = 0
    Object.values(coffees).forEach((quantity) => {
      totalQuantity += quantity
    })
    const valueTotal = totalQuantity * 9.9
    const taxacao = taxa ?? 0
    const valueTotalFixed = valueTotal + taxacao
    return valueTotalFixed
  }

  const taxaEntrega = Object.keys(coffees).length > 0 ? 3.5 : 0

  return (
    <div className="flex w-full max-w-[448px] flex-col gap-3">
      <h3 className="font-baloo text-lg font-bold text-gray-700">
        Cafés selecionados
      </h3>
      <div className="flex flex-col gap-6 rounded-bl-[44px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[44px] bg-gray-100 p-10">
        <div>
          <Each
            of={Object.entries(coffees)}
            render={(coffee: [CoffeesType, number]) => (
              <>
                <Cart
                  img={coffeesData[coffee[0]].img}
                  addCoffee={addCoffee}
                  type={coffee[0]}
                  price={coffeesData[coffee[0]].price}
                  quantity={coffee[1]}
                  title={coffeesData[coffee[0]].title}
                  removeCoffee={removeCoffee}
                />
                <div className="h-[1px] w-full bg-gray-300"></div>
              </>
            )}
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center justify-between text-gray-600">
            <span className="text-sm">Total de itens</span>
            <span className="text-base">R$ {MoneyMask(getTotalCoffee())}</span>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <span className="text-sm">Entrega</span>
            <span className="text-base">R$ {MoneyMask(taxaEntrega)}</span>
          </div>
          <div className="flex items-center justify-between text-xl font-bold text-gray-700">
            <span>Total</span>
            <span>R$ {MoneyMask(getTotalCoffee(taxaEntrega))}</span>
          </div>
        </div>
        <NavLink
          to="/coffee-delivery/success"
          title="Success"
          onClick={() => console.log('success')}
          // className="pointer-events-none"
        >
          <Button
            label="confirmar pedido"
            variant="primary"
            onClick={() => console.log('finish')}
          />
        </NavLink>
      </div>
    </div>
  )
}
