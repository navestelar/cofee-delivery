import Catalog from '../../components/Catalog'
import { coffesData } from '../../data/coffes-data'
import { Each } from '../../utils/Each'

export default function CoffesSection() {
  return (
    <section className="container">
      <p>Nossos cafés</p>
      <article className="flex flex-wrap gap-4">
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
