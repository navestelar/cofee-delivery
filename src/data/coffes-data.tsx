import chocolateQuente from '../assets/coffes/chocolateQuente.png'
import expressoAmericano from '../assets/coffes/coffeAmericano.png'
import arabe from '../assets/coffes/coffeArabe.png'
import capuccino from '../assets/coffes/coffeCapuccino.png'
import cafeComLeite from '../assets/coffes/coffeComLeite.png'
import cubano from '../assets/coffes/coffeCubano.png'
import expressoTradicional from '../assets/coffes/coffeExpresso.png'
import expressoCremoso from '../assets/coffes/coffeExpressoCremoso.png'
import expressoGelado from '../assets/coffes/coffeGelado.png'
import havaiano from '../assets/coffes/coffeHavaiano.png'
import irlandes from '../assets/coffes/coffeIrlandes.png'
import latte from '../assets/coffes/coffeLatte.png'
import macchiato from '../assets/coffes/coffeMacchiato.png'
import mocaccino from '../assets/coffes/coffeMochaccino.png'
import { coffeDataInterface } from '../interfaces/coffe-interface'

export const coffesData: coffeDataInterface = {
  ExpressoTradicional: {
    img: (
      <img
        width={120}
        height={120}
        src={expressoTradicional}
        alt="café expresso tradicional"
      />
    ),
    tags: ['tradicional'],
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    onClick: () => console.log('expresso tradicional'),
    quantity: 1,
    setQuantity: () => console.log('expresso tradicional qtd'),
  },
  ExpressoAmericano: {
    img: (
      <img
        width={120}
        height={120}
        src={expressoAmericano}
        alt="café expresso americano"
      />
    ),
    tags: ['tradicional'],
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    onClick: () => console.log('expresso americano'),
    quantity: 1,
    setQuantity: () => console.log('expresso americano qtd'),
  },
  ExpressoCremoso: {
    img: (
      <img
        width={120}
        height={120}
        src={expressoCremoso}
        alt="café expresso cremoso"
      />
    ),
    tags: ['tradicional'],
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    onClick: () => console.log('expresso cremoso'),
    quantity: 1,
    setQuantity: () => console.log('expresso cremoso qtd'),
  },
  ExpressoGelado: {
    img: (
      <img
        width={120}
        height={120}
        src={expressoGelado}
        alt="café expresso gelado"
      />
    ),
    tags: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    onClick: () => console.log('expresso gelado'),
    quantity: 1,
    setQuantity: () => console.log('expresso gelado qtd'),
  },
  CafeComLeite: {
    img: (
      <img width={120} height={120} src={cafeComLeite} alt="café com leite" />
    ),
    tags: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    onClick: () => console.log('café com leite'),
    quantity: 1,
    setQuantity: () => console.log('café com leite qtd'),
  },
  Latte: {
    img: <img width={120} height={120} src={latte} alt="café latte" />,
    tags: ['tradicional', 'com leite'],
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    onClick: () => console.log('latte'),
    quantity: 1,
    setQuantity: () => console.log('latte qtd'),
  },
  Capuccino: {
    img: <img width={120} height={120} src={capuccino} alt="café capuccino" />,
    tags: ['tradicional', 'com leite'],
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    onClick: () => console.log('Capuccino'),
    quantity: 1,
    setQuantity: () => console.log('Capuccino qtd'),
  },
  Macchiato: {
    img: <img width={120} height={120} src={macchiato} alt="café Macchiato" />,
    tags: ['tradicional', 'com leite'],
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    onClick: () => console.log('Macchiato'),
    quantity: 1,
    setQuantity: () => console.log('Macchiato qtd'),
  },
  Mocaccino: {
    img: (
      <img
        width={120}
        height={120}
        src={mocaccino}
        alt="mocaccino tradicional"
      />
    ),
    tags: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    onClick: () => console.log('mocaccino'),
    quantity: 1,
    setQuantity: () => console.log('mocaccino qtd'),
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
    onClick: () => console.log('chocolateQuente'),
    quantity: 1,
    setQuantity: () => console.log('chocolateQuente qtd'),
  },
  Cubano: {
    img: <img width={120} height={120} src={cubano} alt="cubano tradicional" />,
    tags: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    onClick: () => console.log('cubano'),
    quantity: 1,
    setQuantity: () => console.log('cubano qtd'),
  },
  Havaiano: {
    img: (
      <img width={120} height={120} src={havaiano} alt="havaiano tradicional" />
    ),
    tags: ['especial'],
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    onClick: () => console.log('havaiano'),
    quantity: 1,
    setQuantity: () => console.log('havaiano qtd'),
  },
  Arabe: {
    img: <img width={120} height={120} src={arabe} alt="arabe tradicional" />,
    tags: ['especial'],
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    onClick: () => console.log('arabe'),
    quantity: 1,
    setQuantity: () => console.log('arabe qtd'),
  },
  Irlandes: {
    img: <img width={120} height={120} src={irlandes} alt="irlandes" />,
    tags: ['especial', 'alcoólico'],
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    onClick: () => console.log('irlandes'),
    quantity: 1,
    setQuantity: () => console.log('irlandes qtd'),
  },
}
