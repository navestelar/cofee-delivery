import Cart from "../../components/Cart"
import CoffeExpresso from "../../assets/coffeExpresso.png"
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-5">
      <h1>Home</h1>
      <Cart
        img={<img src={CoffeExpresso} width={64} height={64} />}
        price="9,90"
        quantity={count}
        onClick={() => console.log('cart')}
        setQuantity={(value: number) => setCount(value)}
        title="Expresso Tradicional"
      />
    </div>
  )
}
