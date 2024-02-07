import { useContext } from 'react'

import Catalog from '../../components/Catalog'
import { CoffeesContext } from '../../contexts/CoffeeContext'
import { coffeesData } from '../../data/coffees-data'
import { Each } from '../../utils/Each'

export default function CoffeesSection() {
  const { addCoffee } = useContext(CoffeesContext)

  return (
    <section className="container mb-28 flex flex-col gap-[1.5rem] md:gap-[3.375rem]">
      <p className="text-center font-baloo text-[2rem] font-extrabold lg:text-start">
        Nossos cafés
      </p>
      <article className="grid grid-cols-[repeat(auto-fill,256px)] justify-center gap-x-8 gap-y-10">
        <Each
          of={Object.entries(coffeesData)}
          render={(coffee) => (
            <Catalog
              img={coffee[1].img}
              addCoffee={addCoffee}
              price={coffee[1].price}
              title={coffee[1].title}
              subtitle={coffee[1].subtitle}
              tags={coffee[1].tags}
              type={coffee[0]}
            />
          )}
        />
      </article>
    </section>
  )
}
