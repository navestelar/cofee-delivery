import Catalog from '../../components/Catalog'
import { coffesData } from '../../data/coffes-data'
import { Each } from '../../utils/Each'

export default function CoffesSection() {
  return (
    <section className="container mb-28 flex flex-col gap-[1.5rem] md:gap-[3.375rem]">
      <p className="text-center font-baloo text-[2rem] font-extrabold lg:text-start">
        Nossos cafés
      </p>
      <article className="grid grid-cols-[repeat(auto-fill,256px)] justify-center gap-x-5 gap-y-8">
        <Each
          of={Object.entries(coffesData)}
          render={(coffe) => (
            <Catalog
              img={coffe[1].img}
              onClick={coffe[1].onClick}
              price={coffe[1].price}
              quantity={coffe[1].quantity}
              setQuantity={coffe[1].setQuantity}
              title={coffe[1].title}
              subtitle={coffe[1].subtitle}
              tags={coffe[1].tags}
            />
          )}
        />
      </article>
    </section>
  )
}
