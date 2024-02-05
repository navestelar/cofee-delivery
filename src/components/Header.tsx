import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import colors from 'tailwindcss/colors'

import Logotipo from '../assets/Logotipo.svg'
import { CoffesContext } from '../contexts/CoffeContext'
import Button from './ui/Button'

export default function Header() {
  const { coffes } = useContext(CoffesContext)

  return (
    <header className="container flex justify-between py-8">
      <NavLink to="/" title="Home">
        <h1 title="Coffe Delivery">
          <img src={Logotipo} alt="Logotivo coffe delivery" />
        </h1>
      </NavLink>
      <div className="flex gap-3">
        <div className="flex gap-1 rounded-md bg-purple-300 p-2">
          <MapPin size={22} color={colors.purple['500']} />
          <span className="text-sm text-purple-800">Porto Alegre, RS</span>
        </div>
        <NavLink to="/checkout" title="Checkout">
          <Button
            cartCount={Object.keys(coffes).length}
            icon={<ShoppingCart size={22} color={colors.yellow['800']} />}
            variant="quartenary"
          />
        </NavLink>
      </div>
    </header>
  )
}
