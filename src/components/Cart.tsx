import { Trash } from '@phosphor-icons/react'
import colors from 'tailwindcss/colors'

import { coffeProperties } from '../interfaces/coffe-interface'
import Button from './ui/Button'
import CartCount from './ui/CartCount'

export default function Cart({
  img,
  title,
  onClick,
  quantity,
  setQuantity,
  price,
}: coffeProperties) {
  return (
    <div className="flex w-[23rem] justify-between gap-5 bg-gray-100 px-1 py-2">
      <div className="flex gap-5">
        <div className="flex size-16">{img}</div>
        <div className="flex flex-col justify-between">
          <span className="text-base text-gray-700">{title}</span>
          <div className="flex gap-2">
            <CartCount count={quantity} setCount={setQuantity} />
            <Button
              variant="secondary"
              icon={<Trash size={16} color={colors.purple['500']} />}
              label="remover"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
      <span className="text-base font-bold text-gray-600">R$ {price}</span>
    </div>
  )
}
