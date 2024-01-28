import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import colors from 'tailwindcss/colors'

import { ToggleItemProperties } from '../interfaces/toogleGroupInterface'

export const paymentOptions: ToggleItemProperties[] = [
  {
    icon: <CreditCard size={16} color={colors.purple['500']} />,
    label: 'Cartão de crédito',
  },
  {
    icon: <Bank size={16} color={colors.purple['500']} />,
    label: 'cartão de débito',
  },
  {
    icon: <Money size={16} color={colors.purple['500']} />,
    label: 'dinheiro',
  },
]
