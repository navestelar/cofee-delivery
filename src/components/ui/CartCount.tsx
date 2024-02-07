import { Minus, Plus } from '@phosphor-icons/react'

interface cartCountProperties {
  count: number
  setCount: (value: number) => void
}

export default function CartCount({ count, setCount }: cartCountProperties) {
  function handleDecrease() {
    count > 1 && setCount(count - 1)
  }

  function handleIncrease() {
    count < 99 && setCount(count + 1)
  }

  function handleValidateInput(value: number) {
    if (value >= 0 && value < 100) {
      setCount(value)
    }
  }

  return (
    <div className="flex w-fit items-center gap-1 rounded-md bg-gray-300 p-2">
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
        className="h-4 max-w-[20px] bg-gray-300 text-center outline-none"
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
