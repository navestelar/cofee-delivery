import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

export default function CartCount() {
  const [count, setCount] = useState(0)

  function handleDecrease() {
    count > 0 && setCount(count - 1)
  }

  function handleIncrease() {
    count < 99 && setCount(count + 1)
  }

  function handleValidateInput(value: number) {
    if (value >= 0 && value < 99) {
      setCount(value)
    }
  }

  return (
    <div className="flex items-center p-2 gap-1 rounded-md bg-gray-300 w-fit">
      <Minus
        size={14}
        onClick={handleDecrease}
        className="cursor-pointer text-purple-500 hover:text-purple-800"
      />
      <input
        id=""
        type="text"
        maxLength={3}
        value={count}
        className="max-w-[20px] bg-gray-300 text-center outline-none"
        onChange={(e) => handleValidateInput(Number(e.target.value))}
      />
      <Plus
        size={14}
        onClick={handleIncrease}
        className="cursor-pointer text-purple-500 hover:text-purple-800"
      />
    </div>
  )
}
