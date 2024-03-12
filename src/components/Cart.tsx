import { Trash } from '@phosphor-icons/react'
import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { useState } from 'react'
import toast from 'react-hot-toast'
import colors from 'tailwindcss/colors'

import { coffeeProperties } from '../interfaces/coffee-interface'
import Button from './ui/Button'
import CartCount from './ui/CartCount'

export default function Cart({
  img,
  title,
  type,
  addCoffee,
  removeCoffee,
  quantity,
  price,
}: coffeeProperties) {
  const [newQuantity, setNewQuantity] = useState(quantity ?? 0)

  function handleRemoveCoffee() {
    removeCoffee && removeCoffee(type)
    toast.success(`${type} foi removido do carrinho.`)
  }

  function handleSetCount(value: number) {
    setNewQuantity(value)
    addCoffee(type, value)
  }

  return (
    <div className="flex w-[23rem] justify-between gap-5 bg-gray-100 px-1 py-2">
      <div className="flex gap-5">
        <div className="flex size-16">{img}</div>
        <div className="flex flex-col justify-between">
          <span className="text-base text-gray-700">{title}</span>
          <div className="flex gap-2">
            <CartCount count={newQuantity} setCount={handleSetCount} />
            <AlertDialog.Root>
              <AlertDialog.Trigger asChild>
                <Button
                  variant="secondary"
                  icon={<Trash size={16} color={colors.purple['500']} />}
                  label="remover"
                />
              </AlertDialog.Trigger>
              <AlertDialog.Portal>
                <AlertDialog.Overlay className="fixed inset-0 bg-[#0000005d] data-[state=open]:animate-overlayShow" />
                <AlertDialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
                  <AlertDialog.Title className="m-0 text-[17px] font-medium text-purple-500">
                    Tem certeza?
                  </AlertDialog.Title>
                  <AlertDialog.Description className="mb-5 mt-4 text-[15px] leading-normal">
                    Confirme se você realmente deseja deletar o {type} do
                    carrinho
                  </AlertDialog.Description>
                  <div className="flex justify-end gap-[25px]">
                    <AlertDialog.Cancel asChild>
                      <button className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-purple-500 px-[15px] font-medium leading-none text-gray-100 outline-none transition ease-in-out hover:bg-purple-800 focus:shadow-[0_0_0_2px]">
                        Cancel
                      </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                      <button
                        onClick={handleRemoveCoffee}
                        className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-[#fa4646] px-[15px] font-medium leading-none text-gray-50 outline-none transition ease-in-out hover:bg-[#b04444] focus:shadow-[0_0_0_2px]"
                      >
                        Sim, delete o café
                      </button>
                    </AlertDialog.Action>
                  </div>
                </AlertDialog.Content>
              </AlertDialog.Portal>
            </AlertDialog.Root>
          </div>
        </div>
      </div>
      <span className="text-base font-bold text-gray-600">R$ {price}</span>
    </div>
  )
}
