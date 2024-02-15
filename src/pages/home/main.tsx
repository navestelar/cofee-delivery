import { ShoppingCart, Timer } from '@phosphor-icons/react'
import colors from 'tailwindcss/colors'

import Background from '../../assets/Background.png'
import CoffeeImage from '../../assets/homeImage.png'

export default function Main() {
  return (
    <main className="relative flex w-screen flex-col">
      <div className="absolute max-h-[544px] w-screen">
        <img className="max-h-[544px] w-screen" src={Background} alt="" />
      </div>
      <div className="container mb-10 flex h-[46rem] flex-col-reverse items-center justify-between sm:h-[34rem] lg:mb-0 lg:flex-row">
        <div className="max-w-[36.75rem]">
          <div className="mb-[4.125rem] flex flex-col gap-4">
            <span className="font-baloo text-5xl text-gray-900">
              Encontre o café perfeito para qualquer hora do dia
            </span>
            <p className="text-xl text-gray-700">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="flex max-w-[560px] flex-col justify-between gap-5 sm:flex-row sm:gap-0">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-yellow-700 p-2">
                  <ShoppingCart size={16} color={colors.white} />
                </span>
                <span className="text-base text-gray-600">
                  Compra simples e segura
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-yellow-500 p-2">
                  <Timer size={16} color={colors.white} />
                </span>
                <span className="text-base text-gray-600">
                  Entrega rápida e rastreada
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gray-600 p-2">
                  <ShoppingCart size={16} color={colors.white} />
                </span>
                <span className="text-base text-gray-600">
                  Embalagem mantém o café intacto
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-purple-500 p-2">
                  <Timer size={16} color={colors.white} />
                </span>
                <span className="text-base text-gray-600">
                  O café chega fresquinho até você
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[320px] lg:max-w-[476px]">
          <img src={CoffeeImage} alt="Coffee" />
        </div>
      </div>
    </main>
  )
}
