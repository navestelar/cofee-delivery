import { ReactNode } from 'react'

interface PaymentButtonProperties {
  icon: ReactNode
  label: string
  onClick: () => void
}

export default function PaymentButton({
  icon,
  label,
  onClick,
}: PaymentButtonProperties) {
  return (
    <button onClick={onClick}>
      {icon}
      {label}
    </button>
  )
}
