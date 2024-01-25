import colors from 'tailwindcss/colors'
import { ReactNode } from 'react'
import { Each } from '../utils/Each'
import CartCount from './ui/CartCount'
import Button from './ui/Button'
import { ShoppingCartSimple } from '@phosphor-icons/react'

type tagsOption =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'especial'
  | 'alcoólico'

export interface coffeProperties {
  title: string
  subtitle?: string
  img: ReactNode
  tags?: tagsOption[]
  price: string
  quantity: number
  setQuantity: (value: number) => void
  onClick: () => void
}

export default function Catalog({
  title,
  subtitle,
  img,
  tags,
  price,
  quantity,
  onClick,
  setQuantity,
}: coffeProperties) {
  return (
    <div className="mt-5 flex w-64 flex-col place-items-center rounded-bl-[2.25rem] rounded-br-md rounded-tl-md rounded-tr-[2.25rem] bg-gray-100 p-5">
      <div className="mt-[-40px] size-[7.5rem]">{img}</div>

      {tags && (
        <div className="mt-3 flex gap-1 font-bold">
          <Each
            of={tags}
            render={(tag) => (
              <span className="rounded-full bg-yellow-300 px-2 py-1 text-[0.625rem] uppercase text-yellow-700">
                {tag}
              </span>
            )}
          />
        </div>
      )}

      <h3 className="mt-5 font-baloo text-xl font-bold text-gray-700">
        {title}
      </h3>
      <span className="mt-2 text-center text-sm text-gray-500">{subtitle}</span>

      <div className="mt-8 flex w-full items-center justify-between">
        <p className="text-sm text-gray-600">
          R$
          <span className="ml-1 font-baloo text-2xl font-extrabold">
            {price}
          </span>
        </p>
        <div className="flex gap-2">
          <CartCount count={quantity} setCount={setQuantity} />
          <Button
            variant="tertiary"
            onClick={onClick}
            icon={<ShoppingCartSimple size={22} color={colors.white} />}
          />
        </div>
      </div>
    </div>
  )
}
