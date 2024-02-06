import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import Cart from '../../components/Cart'
import Button from '../../components/ui/Button'
import { CoffesContext } from '../../contexts/CoffeContext'
import { coffesData } from '../../data/coffes-data'
import { CoffesType } from '../../interfaces/coffe-interface'
import { Each } from '../../utils/Each'

export default function FinishCheckout() {
  const { addCoffe, coffes, removeCoffe } = useContext(CoffesContext)

  return (
    <div className="flex w-full max-w-[448px] flex-col gap-3">
      <h3 className="font-baloo text-lg font-bold text-gray-700">
        Cafés selecionados
      </h3>
      <div className="flex flex-col gap-6 rounded-bl-[44px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[44px] bg-gray-100 p-10">
        <Each
          of={Object.entries(coffes)}
          render={(coffe: [CoffesType, number]) => (
            <>
              <Cart
                img={coffesData[coffe[0]].img}
                addCoffe={addCoffe}
                type={coffe[0]}
                price={coffesData[coffe[0]].price}
                quantity={coffe[1]}
                title={coffesData[coffe[0]].title}
                removeCoffe={removeCoffe}
              />
              <div className="h-[1px] w-full bg-gray-300"></div>
            </>
          )}
        />
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center justify-between text-gray-600">
            <span className="text-sm">Total de itens</span>
            <span className="text-base">R$ 29,70</span>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <span className="text-sm">Entrega</span>
            <span className="text-base">R$ 3,50</span>
          </div>
          <div className="flex items-center justify-between text-xl font-bold text-gray-700">
            <span>Total</span>
            <span>R$ 33,20</span>
          </div>
        </div>
        <NavLink
          to="/success"
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
