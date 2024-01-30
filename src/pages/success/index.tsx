import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import colors from 'tailwindcss/colors'

import deliveryImage from '../../assets/checkoutImage.png'

export default function Success() {
  return (
    <main className="container flex justify-between py-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col">
          <h2 className="font-baloo text-[2rem] font-bold text-yellow-700">
            Uhu! Pedido confirmado
          </h2>
          <p className="text-xl text-gray-700">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <div className="btn-gradient-1 flex flex-col gap-8 rounded-bl-[36px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[36px] border p-10 leading-5">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-purple-500 p-2">
              <MapPin size={16} color={colors.white} />
            </div>
            <div className="flex flex-col text-gray-600">
              <span>
                Entrega em{' '}
                <span className="font-bold">
                  Rua João Daniel Martinelli, 102
                </span>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-yellow-500 p-2">
              <Timer size={16} color={colors.white} />
            </div>
            <div className="flex flex-col text-gray-600">
              <span>Previsão de entrega</span>
              <span className="font-bold">20 min - 30 min</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-yellow-700 p-2">
              <CurrencyDollar size={16} color={colors.white} />
            </div>
            <div className="flex flex-col text-gray-600">
              <span>Pagamento na entrega</span>
              <span className="font-bold">Cartão de Crédito</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={deliveryImage}
          alt="Imagem de um motoboy a caminho da entrega"
          title="Seu pedido está a caminho"
        />
      </div>
    </main>
  )
}
