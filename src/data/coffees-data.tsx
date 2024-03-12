import chocolateQuente from '../assets/coffees/chocolateQuente.png'
import coffeeAmericano from '../assets/coffees/coffeeAmericano.png'
import coffeeArabe from '../assets/coffees/coffeeArabe.png'
import coffeeCapuccino from '../assets/coffees/coffeeCapuccino.png'
import coffeeComLeite from '../assets/coffees/coffeeComLeite.png'
import coffeeCubano from '../assets/coffees/coffeeCubano.png'
import coffeeExpresso from '../assets/coffees/coffeeExpresso.png'
import coffeeExpressoCremoso from '../assets/coffees/coffeeExpressoCremoso.png'
import coffeeGelado from '../assets/coffees/coffeeGelado.png'
import coffeeHavaiano from '../assets/coffees/coffeeHavaiano.png'
import coffeeIrlandes from '../assets/coffees/coffeeIrlandes.png'
import coffeeLatte from '../assets/coffees/coffeeLatte.png'
import coffeeMacchiato from '../assets/coffees/coffeeMacchiato.png'
import coffeeMochaccino from '../assets/coffees/coffeeMochaccino.png'
import { coffeeDataInterface } from '../interfaces/coffee-interface'

export const coffeesData: coffeeDataInterface = {
  ExpressoTradicional: {
    img: (
      <img
        width={120}
        height={120}
        src={coffeeExpresso}
        alt="café expresso tradicional"
      />
    ),
    tags: ['tradicional'],
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  ExpressoAmericano: {
    img: (
      <img
        width={120}
        height={120}
        src={coffeeAmericano}
        alt="café expresso americano"
      />
    ),
    tags: ['tradicional'],
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
  ExpressoCremoso: {
    img: (
      <img
        width={120}
        height={120}
        src={coffeeExpressoCremoso}
        alt="café expresso cremoso"
      />
    ),
    tags: ['tradicional'],
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
  },
  ExpressoGelado: {
    img: (
      <img
        width={120}
        height={120}
        src={coffeeGelado}
        alt="café expresso gelado"
      />
    ),
    tags: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
  },
  CafeComLeite: {
    img: (
      <img width={120} height={120} src={coffeeComLeite} alt="café com leite" />
    ),
    tags: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
  },
  Latte: {
    img: <img width={120} height={120} src={coffeeLatte} alt="café latte" />,
    tags: ['tradicional', 'com leite'],
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
  },
  Capuccino: {
    img: (
      <img
        width={120}
        height={120}
        src={coffeeCapuccino}
        alt="café capuccino"
      />
    ),
    tags: ['tradicional', 'com leite'],
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
  },
  Macchiato: {
    img: (
      <img
        width={120}
        height={120}
        src={coffeeMacchiato}
        alt="café Macchiato"
      />
    ),
    tags: ['tradicional', 'com leite'],
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  Mocaccino: {
    img: (
      <img
        width={120}
        height={120}
        src={coffeeMochaccino}
        alt="mocaccino tradicional"
      />
    ),
    tags: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
  },
  ChocolateQuente: {
    img: (
      <img
        width={120}
        height={120}
        src={chocolateQuente}
        alt="chocolateQuente tradicional"
      />
    ),
    tags: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
  },
  Cubano: {
    img: (
      <img
        width={120}
        height={120}
        src={coffeeCubano}
        alt="cubano tradicional"
      />
    ),
    tags: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  Havaiano: {
    img: (
      <img
        width={120}
        height={120}
        src={coffeeHavaiano}
        alt="havaiano tradicional"
      />
    ),
    tags: ['especial'],
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
  },
  Arabe: {
    img: (
      <img width={120} height={120} src={coffeeArabe} alt="arabe tradicional" />
    ),
    tags: ['especial'],
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
  },
  Irlandes: {
    img: <img width={120} height={120} src={coffeeIrlandes} alt="irlandes" />,
    tags: ['especial', 'alcoólico'],
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
  },
}
