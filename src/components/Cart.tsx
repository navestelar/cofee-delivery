import { Trash } from '@phosphor-icons/react'
import { useState } from 'react'
import colors from 'tailwindcss/colors'

import { coffeProperties } from '../interfaces/coffe-interface'
import Button from './ui/Button'
import CartCount from './ui/CartCount'

export default function Cart({
  img,
  title,
  type,
  addCoffe,
  removeCoffe,
  quantity,
  price,
}: coffeProperties) {
  const [newQuantity, setNewQuantity] = useState(quantity ?? 0)

  function handleRemoveCoffe() {
    removeCoffe && removeCoffe(type)
  }

  function handleSetCount(value: number) {
    setNewQuantity(value)
    addCoffe(type, value)
  }

  return (
    <div className="flex w-[23rem] justify-between gap-5 bg-gray-100 px-1 py-2">
      <div className="flex gap-5">
        <div className="flex size-16">{img}</div>
        <div className="flex flex-col justify-between">
          <span className="text-base text-gray-700">{title}</span>
          <div className="flex gap-2">
            <CartCount count={newQuantity} setCount={handleSetCount} />
            <Button
              variant="secondary"
              icon={<Trash size={16} color={colors.purple['500']} />}
              label="remover"
              onClick={handleRemoveCoffe}
            />
          </div>
        </div>
      </div>
      <span className="text-base font-bold text-gray-600">R$ {price}</span>
    </div>
  )
}
