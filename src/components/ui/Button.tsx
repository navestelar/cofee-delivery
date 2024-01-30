import { ReactNode } from 'react'

type buttonProperties = {
  label?: string
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quartenary'
  icon?: ReactNode
  cartCount?: number
  onClick?: () => void
}

export default function Button({
  label,
  variant = 'primary',
  icon,
  cartCount,
  onClick,
}: buttonProperties) {
  const buttonStyleVariant = {
    primary:
      'py-3 px-2 bg-yellow-500 hover:bg-yellow-700 text-white text-sm font-bold w-full',
    secondary: 'px-2 bg-gray-300 hover:bg-gray-400 text-xs',
    tertiary: 'p-2 bg-purple-800 hover:bg-purple-500',
    quartenary: 'p-2 bg-yellow-300 hover:opacity-80',
  }

  return (
    <button
      className={`relative flex place-content-center place-items-center gap-1 rounded-md uppercase transition ease-in-out ${buttonStyleVariant[variant]}`}
      onClick={onClick}
    >
      {icon}
      {label && <span>{label}</span>}
      {cartCount && (
        <span className="absolute right-[-8px] top-[-8px] flex size-5 place-content-center place-items-center rounded-full bg-yellow-700 text-xs font-bold text-white">
          {cartCount}
        </span>
      )}
    </button>
  )
}
