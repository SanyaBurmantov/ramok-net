// Каталог товаров. Чтобы добавить товар — допишите объект в массив `products`.
// Картинки лежат в /public/images/mainPage/categorys/<категория>/

export interface Category {
  slug: string
  name: string
  description: string
  image: string
}

export interface Product {
  id: string
  category: string
  title: string
  description: string
  /** Цена в BYN за комплект (2 шт.) */
  price: number
  image: string
  /** Крупное изображение для страницы товара (если есть) */
  imageLarge?: string
}

export const categories: Category[] = [
  {
    slug: "flags",
    name: "Флаги",
    description: "Рамки с флагами стран",
    image: "/images/mainPage/categorys/catalog1.png"
  },
  {
    slug: "footbal",
    name: "Футбол",
    description: "Рамки на футбольную тематику",
    image: "/images/mainPage/categorys/catalog2.png"
  },
  {
    slug: "themes",
    name: "Тематические",
    description: "Игры/фильмы/книги",
    image: "/images/mainPage/categorys/catalog3.png"
  },
  {
    slug: "texts",
    name: "Надписи",
    description: "Придумай свой текст рамки",
    image: "/images/mainPage/categorys/catalog4.png"
  },
  {
    slug: "autos",
    name: "Модели авто",
    description: "Номерная рамка под любую модель авто",
    image: "/images/mainPage/categorys/catalog5.png"
  }
]

export const products: Product[] = [
  {
    id: "201",
    category: "flags",
    title: "Japan",
    description: "Флаг любой страны в любом оформлении и дизайне",
    price: 38,
    image: "/images/mainPage/categorys/flags/1.png"
  },
  {
    id: "202",
    category: "flags",
    title: "Germany",
    description: "Флаг любой страны в любом оформлении и дизайне",
    price: 38,
    image: "/images/mainPage/categorys/flags/2.png"
  },
  {
    id: "203",
    category: "flags",
    title: "Italy",
    description: "Флаг любой страны в любом оформлении и дизайне",
    price: 38,
    image: "/images/mainPage/categorys/flags/3.png"
  },
  {
    id: "204",
    category: "flags",
    title: "France",
    description: "Флаг любой страны в любом оформлении и дизайне",
    price: 38,
    image: "/images/mainPage/categorys/flags/4.png"
  },
  {
    id: "205",
    category: "flags",
    title: "United K",
    description: "Флаг любой страны в любом оформлении и дизайне",
    price: 38,
    image: "/images/mainPage/categorys/flags/5.png"
  },
  {
    id: "206",
    category: "flags",
    title: "Sweden",
    description: "Флаг любой страны в любом оформлении и дизайне",
    price: 38,
    image: "/images/mainPage/categorys/flags/6.png"
  },
  {
    id: "207",
    category: "flags",
    title: "Belarus",
    description: "Флаг любой страны в любом оформлении и дизайне",
    price: 38,
    image: "/images/mainPage/categorys/flags/7.png"
  },
  {
    id: "208",
    category: "flags",
    title: "IDK",
    description: "Флаг любой страны в любом оформлении и дизайне",
    price: 38,
    image: "/images/mainPage/categorys/flags/8.png"
  },
  {
    id: "300",
    category: "footbal",
    title: "Dinamo Minsk",
    description: "Футбольная тематика",
    price: 38,
    image: "/images/mainPage/categorys/footbal/1.png"
  },
  {
    id: "301",
    category: "footbal",
    title: "FC Barselona",
    description: "Футбольная тематика",
    price: 38,
    image: "/images/mainPage/categorys/footbal/2.png"
  },
  {
    id: "302",
    category: "footbal",
    title: "Realmadrid",
    description: "Футбольная тематика",
    price: 38,
    image: "/images/mainPage/categorys/footbal/3.png"
  },
  {
    id: "304",
    category: "footbal",
    title: "CSKA MOSCOW",
    description: "Футбольная тематика",
    price: 38,
    image: "/images/mainPage/categorys/footbal/5.png"
  },
  {
    id: "305",
    category: "footbal",
    title: "FC MANCHESTER UNITED",
    description: "Футбольная тематика",
    price: 38,
    image: "/images/mainPage/categorys/footbal/6.png"
  },
  {
    id: "307",
    category: "footbal",
    title: "FC MANCHESTER UNITED",
    description: "Футбольная тематика",
    price: 38,
    image: "/images/mainPage/categorys/footbal/8.png"
  },
  {
    id: "308",
    category: "footbal",
    title: "Arsenal",
    description: "Футбольная тематика",
    price: 38,
    image: "/images/mainPage/categorys/footbal/9.png"
  },
  {
    id: "309",
    category: "footbal",
    title: "JUVENTUS",
    description: "Футбольная тематика",
    price: 38,
    image: "/images/mainPage/categorys/footbal/10.png"
  },
  {
    id: "200",
    category: "themes",
    title: "GTA SanAndreas",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/1.png"
  },
  {
    id: "199",
    category: "themes",
    title: "GTA ViceCity",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/2.png"
  },
  {
    id: "198",
    category: "themes",
    title: "Bears",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/3.png"
  },
  {
    id: "197",
    category: "themes",
    title: "World Of Tanks",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/4.png"
  },
  {
    id: "196",
    category: "themes",
    title: "Guardians of the Galaxy",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/5.png"
  },
  {
    id: "194",
    category: "themes",
    title: "Sword Ar Online",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/7.png"
  },
  {
    id: "193",
    category: "themes",
    title: "Marvel",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/8.png"
  },
  {
    id: "191",
    category: "themes",
    title: "Anime",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/10.png"
  },
  {
    id: "189",
    category: "themes",
    title: "CS GO",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/12.png"
  },
  {
    id: "188",
    category: "themes",
    title: "Skeletons",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/13.png"
  },
  {
    id: "187",
    category: "themes",
    title: "The Simpsons",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/14.png"
  },
  {
    id: "186",
    category: "themes",
    title: "В чем сила брат?",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/15.png"
  },
  {
    id: "185",
    category: "themes",
    title: "DeadPool",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/16.png"
  },
  {
    id: "184",
    category: "themes",
    title: "NFS",
    description: "Игры фильмы книги",
    price: 38,
    image: "/images/mainPage/categorys/themes/17.png"
  },
  {
    id: "8",
    category: "texts",
    title: "Немецкая сучка",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/1.png",
    imageLarge: "/images/mainPage/categorys/texts/1-big.png"
  },
  {
    id: "9",
    category: "texts",
    title: "Я люблю газ давать пи**а",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/2.png",
    imageLarge: "/images/mainPage/categorys/texts/2-big.png"
  },
  {
    id: "10",
    category: "texts",
    title: "Fake-Taxi",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/3.png",
    imageLarge: "/images/mainPage/categorys/texts/3-big.png"
  },
  {
    id: "11",
    category: "texts",
    title: "Мамы, прячте дочек",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/4.png",
    imageLarge: "/images/mainPage/categorys/texts/4-big.png"
  },
  {
    id: "12",
    category: "texts",
    title: "Вообще по*уй",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/5.png",
    imageLarge: "/images/mainPage/categorys/texts/5-big.png"
  },
  {
    id: "13",
    category: "texts",
    title: "Буква Ю",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/6.png",
    imageLarge: "/images/mainPage/categorys/texts/6-big.png"
  },
  {
    id: "14",
    category: "texts",
    title: "MMM HUETA",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/7.png",
    imageLarge: "/images/mainPage/categorys/texts/7-big.png"
  },
  {
    id: "15",
    category: "texts",
    title: "Ваш инстаграм",
    description: "Тут мог бы быть ваш инстаграм =)",
    price: 28,
    image: "/images/mainPage/categorys/texts/8.png",
    imageLarge: "/images/mainPage/categorys/texts/8-big.png"
  },
  {
    id: "16",
    category: "texts",
    title: "BRAZZERS",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/9.png",
    imageLarge: "/images/mainPage/categorys/texts/9-big.png"
  },
  {
    id: "17",
    category: "texts",
    title: "Вам показалось",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/10.png",
    imageLarge: "/images/mainPage/categorys/texts/10-big.png"
  },
  {
    id: "18",
    category: "texts",
    title: "Японская сучка",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/11.png",
    imageLarge: "/images/mainPage/categorys/texts/11-big.png"
  },
  {
    id: "19",
    category: "texts",
    title: "Вези меня мразь",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/12.png",
    imageLarge: "/images/mainPage/categorys/texts/12-big.png"
  },
  {
    id: "20",
    category: "texts",
    title: "Не прижимайся - не в постели",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/13.png",
    imageLarge: "/images/mainPage/categorys/texts/13-big.png"
  },
  {
    id: "21",
    category: "texts",
    title: "Отец на дороге",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/14.png",
    imageLarge: "/images/mainPage/categorys/texts/14-big.png"
  },
  {
    id: "22",
    category: "texts",
    title: "Не нужна тебе такая тачка брат",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/15.png",
    imageLarge: "/images/mainPage/categorys/texts/15-big.png"
  },
  {
    id: "23",
    category: "texts",
    title: "Обогнал - женись",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/16.png",
    imageLarge: "/images/mainPage/categorys/texts/16-big.png"
  },
  {
    id: "24",
    category: "texts",
    title: "Не гнилая а облегченная",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/17.png",
    imageLarge: "/images/mainPage/categorys/texts/17-big.png"
  },
  {
    id: "25",
    category: "texts",
    title: "Просто рамка",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/18.png",
    imageLarge: "/images/mainPage/categorys/texts/18-big.png"
  },
  {
    id: "26",
    category: "texts",
    title: "Любой ваш текст",
    description: "Тут мог бы быть ваш текст",
    price: 28,
    image: "/images/mainPage/categorys/texts/19.png",
    imageLarge: "/images/mainPage/categorys/texts/19-big.png"
  },
  {
    id: "27",
    category: "texts",
    title: "PornHub",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/20.png",
    imageLarge: "/images/mainPage/categorys/texts/20-big.png"
  },
  {
    id: "28",
    category: "texts",
    title: "Я девочка мне можно",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/21.png",
    imageLarge: "/images/mainPage/categorys/texts/21-big.png"
  },
  {
    id: "29",
    category: "texts",
    title: "Главное двигаться",
    description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
    price: 28,
    image: "/images/mainPage/categorys/texts/22.png",
    imageLarge: "/images/mainPage/categorys/texts/22-big.png"
  },
  {
    id: "101",
    category: "autos",
    title: "Dodge | Durango",
    description: "Модель вашего любимого авто.",
    price: 38,
    image: "/images/mainPage/categorys/autos/2.png"
  },
  {
    id: "102",
    category: "autos",
    title: "Audi A6",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/3.png"
  },
  {
    id: "103",
    category: "autos",
    title: "BMW E34",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/4.png"
  },
  {
    id: "104",
    category: "autos",
    title: "Volvo",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/5.png"
  },
  {
    id: "105",
    category: "autos",
    title: "ГАЗ",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/6.png"
  },
  {
    id: "106",
    category: "autos",
    title: "Land Cruiser",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/7.png"
  },
  {
    id: "108",
    category: "autos",
    title: "Volkswagen",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/9.png"
  },
  {
    id: "109",
    category: "autos",
    title: "Mitsubishi",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/10.png"
  },
  {
    id: "110",
    category: "autos",
    title: "Kia Rio",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/11.png"
  },
  {
    id: "111",
    category: "autos",
    title: "GEELY COOLRAY",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/12.png"
  },
  {
    id: "112",
    category: "autos",
    title: "BMW Club Belarus",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/13.png"
  },
  {
    id: "113",
    category: "autos",
    title: "4x4 Jeep",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/14.png"
  },
  {
    id: "114",
    category: "autos",
    title: "Peugeot 406",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/15.png"
  },
  {
    id: "115",
    category: "autos",
    title: "Renault Megane",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/16.png"
  },
  {
    id: "116",
    category: "autos",
    title: "SKODA RS",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/17.png"
  },
  {
    id: "117",
    category: "autos",
    title: "Lada CROSS",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/18.png"
  },
  {
    id: "118",
    category: "autos",
    title: "Opel Vectra C",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/19.png"
  },
  {
    id: "119",
    category: "autos",
    title: "Nissan X-TRAIL t30",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/20.png"
  },
  {
    id: "120",
    category: "autos",
    title: "GEELY Tugella",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/21.png"
  },
  {
    id: "121",
    category: "autos",
    title: "Mercedes-Benz w211",
    description: "Модель вашего любимого авто",
    price: 38,
    image: "/images/mainPage/categorys/autos/22.png"
  }
]

const productById = new Map(products.map(p => [p.id, p]))

export const getProduct = (id: string) => productById.get(id)

export const getCategory = (slug: string) => categories.find(c => c.slug === slug)

export const getProductsByCategory = (slug: string) => products.filter(p => p.category === slug)

export const minPrice = Math.min(...products.map(p => p.price))
