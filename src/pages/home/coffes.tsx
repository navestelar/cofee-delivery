import { useContext } from 'react'

import Catalog from '../../components/Catalog'
import { CoffesContext } from '../../contexts/CoffeContext'
import { coffesData } from '../../data/coffes-data'
import { Each } from '../../utils/Each'

export default function CoffesSection() {
  const { addCoffe } = useContext(CoffesContext)

  return (
    <section className="container mb-28 flex flex-col gap-[1.5rem] md:gap-[3.375rem]">
      <p className="text-center font-baloo text-[2rem] font-extrabold lg:text-start">
        Nossos cafés
      </p>
      <article className="grid grid-cols-[repeat(auto-fill,256px)] justify-center gap-x-8 gap-y-10">
        <Each
          of={Object.entries(coffesData)}
          render={(coffe) => (
            <Catalog
              img={coffe[1].img}
              addNewCoffe={addCoffe}
              price={coffe[1].price}
              title={coffe[1].title}
              subtitle={coffe[1].subtitle}
              tags={coffe[1].tags}
              type={coffe[0]}
            />
          )}
        />
      </article>
    </section>
  )
}
