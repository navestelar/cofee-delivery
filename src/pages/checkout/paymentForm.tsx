import { CurrencyDollar } from '@phosphor-icons/react'
import colors from 'tailwindcss/colors'

import ToggleGroupField from '../../components/ui/ToggleGroupField'
import { paymentOptions } from '../../data/payment-data'

export default function PaymentForm() {
  return (
    <div className="flex w-full flex-col gap-8 rounded-md bg-gray-100 p-10">
      <div className="flex gap-2">
        <CurrencyDollar size={22} color={colors.purple['500']} />
        <div className="flex flex-col">
          <h3 className="text-base leading-5 text-gray-700">Pagamento</h3>
          <p className="text-sm text-gray-600">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>

      <div>
        <ToggleGroupField
          onChange={() => console.log('afsdfsdfsd')}
          value=""
          options={paymentOptions}
        />
      </div>
    </div>
  )
}
