import { TrashSimple } from '@phosphor-icons/react'
import { coffeProperties } from './Catalog'
import Button from './ui/Button'
import CartCount from './ui/CartCount'
import colors from 'tailwindcss/colors'

export default function Cart({
  img,
  title,
  onClick,
  quantity,
  setQuantity,
}: coffeProperties) {
  return (
    <div>
      {img}
      <div>
        <span>{title}</span>
        <div>
          <CartCount count={quantity} setCount={setQuantity} />
          <Button
            variant="tertiary"
            icon={<TrashSimple size={16} color={colors.purple['500']} />}
            label="remover"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  )
}
