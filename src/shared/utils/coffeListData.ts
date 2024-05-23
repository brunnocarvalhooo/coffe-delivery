export interface coffeListProps {
  id: number
  name: string
  description: string
  price: number
  image: string
  tags: string[]
  quantity: number
}

export const coffeListData: coffeListProps[] = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 990,
    image: '../../assets/coffe-images/ExpressoTradicional.svg',
    tags: ['tradicional'],
    quantity: 0,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 990,
    image:
      'http://localhost:5173/src/assets/coffe-images/ExpressoAmericano.svg',
    tags: ['tradicional'],
    quantity: 0,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 990,
    image: '../../assets/coffe-images/ExpressoCremoso.svg',
    tags: ['tradicional'],
    quantity: 0,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 990,
    image: '../../assets/coffe-images/ExpressoGelado.svg',
    tags: ['tradicional', 'gelado'],
    quantity: 0,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 990,
    image: '../../assets/coffe-images/CafeComLeite.svg',
    tags: ['tradicional', 'com leite'],
    quantity: 0,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 990,
    image: '../../assets/coffe-images/CafeComLeite.svg',
    tags: ['tradicional', 'com leite'],
    quantity: 0,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 990,
    image: '../../assets/coffe-images/CafeComLeite.svg',
    tags: ['tradicional', 'com leite'],
    quantity: 0,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 990,
    image: '../../assets/coffe-images/CafeComLeite.svg',
    tags: ['tradicional', 'com leite'],
    quantity: 0,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 990,
    image: '../../assets/coffe-images/CafeComLeite.svg',
    tags: ['tradicional', 'com leite'],
    quantity: 0,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 990,
    image: '../../assets/coffe-images/CafeComLeite.svg',
    tags: ['especial', 'com leite'],
    quantity: 0,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 990,
    image: '../../assets/coffe-images/CafeComLeite.svg',
    tags: ['especial', 'alcoólico', 'gelado'],
    quantity: 0,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 990,
    image: '../../assets/coffe-images/CafeComLeite.svg',
    tags: ['especial'],
    quantity: 0,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 990,
    image: '../../assets/coffe-images/CafeComLeite.svg',
    tags: ['especial'],
    quantity: 0,
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 990,
    image: '../../assets/coffe-images/CafeComLeite.svg',
    tags: ['especial', 'alcoólico'],
    quantity: 0,
  },
]
