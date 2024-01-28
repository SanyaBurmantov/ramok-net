import { defineStore } from 'pinia'


export const useCategoriesStore = defineStore('categoryStore', {
    state: () => ({
        categories: [
            {
                type: 'flags',
                name: 'Флаги',
                examplePic: '/images/mainPage/categorys/catalog1.png',
                description: 'Рамки с флагами стран'
            },
            {
                type: 'footbal',
                name: 'Футбол',
                examplePic: '/images/mainPage/categorys/catalog2.png',
                description: 'Рамки на футбольную тематику'
            },
            {
                type: 'themes',
                name: 'Тематические',
                examplePic: '/images/mainPage/categorys/catalog3.png',
                description: 'Игры/фильмы/книги'
            },
            {
                type: 'texts',
                name: 'Надписи',
                examplePic: '/images/mainPage/categorys/catalog4.png',
                description: 'Придумай свой текст рамки'
            },
            {
                type: 'autos',
                name: 'Модели авто',
                examplePic: '/images/mainPage/categorys/catalog5.png',
                description: 'Номерная рамка под любую модель авто'
            },
            {
                type: 'all',
                name: 'Смотреть все',
                description: 'Каталог'
            }
        ]
    }),
})

export const useProductStore = defineStore('productStore', {
    state: () => ({
        all: [],
        autos: [
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "101",
                image:  "/images/mainPage/categorys/autos/2.png",
                price: "109.95",
                title: "Dodge | Durango",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "102",
                image:  "/images/mainPage/categorys/autos/3.png",
                price: "109.95",
                title: "Audi A6",
            },{
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "103",
                image:  "/images/mainPage/categorys/autos/4.png",
                price: "109.95",
                title: "BMW E34",
            },{
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "104",
                image:  "/images/mainPage/categorys/autos/5.png",
                price: "109.95",
                title: "Volvo",
            },{
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "105",
                image:  "/images/mainPage/categorys/autos/6.png",
                price: "109.95",
                title: "ГАЗ",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "106",
                image:  "/images/mainPage/categorys/autos/7.png",
                price: "109.95",
                title: "Land Cruiser",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "108",
                image:  "/images/mainPage/categorys/autos/9.png",
                price: "109.95",
                title: "Volkswagen",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "109",
                image:  "/images/mainPage/categorys/autos/10.png",
                price: "109.95",
                title: "Mitsubishi",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "110",
                image:  "/images/mainPage/categorys/autos/11.png",
                price: "109.95",
                title: "Kia Rio",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "111",
                image:  "/images/mainPage/categorys/autos/12.png",
                price: "109.95",
                title: "GEELY COOLRAY",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "112",
                image:  "/images/mainPage/categorys/autos/13.png",
                price: "109.95",
                title: "BMW Club Belarus",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "113",
                image:  "/images/mainPage/categorys/autos/14.png",
                price: "109.95",
                title: "4x4 Jeep",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "114",
                image:  "/images/mainPage/categorys/autos/15.png",
                price: "109.95",
                title: "Peugeot 406",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "115",
                image:  "/images/mainPage/categorys/autos/16.png",
                price: "109.95",
                title: "Renault Megane",
            },{
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "116",
                image:  "/images/mainPage/categorys/autos/17.png",
                price: "109.95",
                title: "SKODA RS",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "117",
                image:  "/images/mainPage/categorys/autos/18.png",
                price: "109.95",
                title: "Lada CROSS",
            },{
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "118",
                image:  "/images/mainPage/categorys/autos/19.png",
                price: "109.95",
                title: "Opel Vectra C",
            },{
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "119",
                image:  "/images/mainPage/categorys/autos/20.png",
                price: "109.95",
                title: "Nissan X-TRAIL t30",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "120",
                image:  "/images/mainPage/categorys/autos/21.png",
                price: "109.95",
                title: "GEELY Tugella",
            },
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "121",
                image:  "/images/mainPage/categorys/autos/22.png",
                price: "109.95",
                title: "Mercedes-Benz w211",
            }
        ],
        themes: [
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "200",
                image:  "/images/mainPage/categorys/themes/1.png",
                price: "109.95",
                title: "GTA SanAndreas",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "199",
                image:  "/images/mainPage/categorys/themes/2.png",
                price: "109.95",
                title: "GTA ViceCity",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "198",
                image:  "/images/mainPage/categorys/themes/3.png",
                price: "109.95",
                title: "Bears",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "197",
                image:  "/images/mainPage/categorys/themes/4.png",
                price: "109.95",
                title: "World Of Tanks",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "196",
                image:  "/images/mainPage/categorys/themes/5.png",
                price: "109.95",
                title: "Guardians of the Galaxy",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "194",
                image:  "/images/mainPage/categorys/themes/7.png",
                price: "109.95",
                title: "Sword Ar Online",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "193",
                image:  "/images/mainPage/categorys/themes/8.png",
                price: "109.95",
                title: "Marvel",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "191",
                image:  "/images/mainPage/categorys/themes/10.png",
                price: "109.95",
                title: "Anime",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "189",
                image:  "/images/mainPage/categorys/themes/12.png",
                price: "109.95",
                title: "CS GO",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "188",
                image:  "/images/mainPage/categorys/themes/13.png",
                price: "109.95",
                title: "Skeletons",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "187",
                image:  "/images/mainPage/categorys/themes/14.png",
                price: "109.95",
                title: "The Simpsons",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "186",
                image:  "/images/mainPage/categorys/themes/15.png",
                price: "109.95",
                title: "В чем сила брат?",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "185",
                image:  "/images/mainPage/categorys/themes/16.png",
                price: "109.95",
                title: "DeadPool",
            },
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "184",
                image:  "/images/mainPage/categorys/themes/17.png",
                price: "109.95",
                title: "NFS",
            },
        ],
        texts: [
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "8",
                image:  "/images/mainPage/categorys/texts/1.png",
                price: "109.95",
                title: "Немецкая сучка",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "9",
                image:  "/images/mainPage/categorys/texts/2.png",
                price: "109.95",
                title: "Я люблю газ давать пи**а",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "10",
                image:  "/images/mainPage/categorys/texts/3.png",
                price: "109.95",
                title: "Fake-Taxi",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "11",
                image:  "/images/mainPage/categorys/texts/4.png",
                price: "109.95",
                title: "Мамы, прячте дочек",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "12",
                image:  "/images/mainPage/categorys/texts/5.png",
                price: "109.95",
                title: "Вообще по*уй",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "13",
                image:  "/images/mainPage/categorys/texts/6.png",
                price: "109.95",
                title: "Буква Ю",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "14",
                image:  "/images/mainPage/categorys/texts/7.png",
                price: "109.95",
                title: "MMM HUETA",
            },
            {
                category: "texts",
                description: "Тут мог бы быть ваш инстаграм =)",
                id: "15",
                image:  "/images/mainPage/categorys/texts/8.png",
                price: "109.95",
                title: "Ваш инстаграм",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "16",
                image:  "/images/mainPage/categorys/texts/9.png",
                price: "109.95",
                title: "BRAZZERS",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "17",
                image:  "/images/mainPage/categorys/texts/10.png",
                price: "109.95",
                title: "Вам показалось",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "18",
                image:  "/images/mainPage/categorys/texts/11.png",
                price: "109.95",
                title: "Японская сучка",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "19",
                image:  "/images/mainPage/categorys/texts/12.png",
                price: "109.95",
                title: "Вези меня мразь",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "20",
                image:  "/images/mainPage/categorys/texts/13.png",
                price: "109.95",
                title: "Не прижимайся - не в постели",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "21",
                image:  "/images/mainPage/categorys/texts/14.png",
                price: "109.95",
                title: "Отец на дороге",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "22",
                image:  "/images/mainPage/categorys/texts/15.png",
                price: "109.95",
                title: "Не нужна тебе такая тачка брат",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "23",
                image:  "/images/mainPage/categorys/texts/16.png",
                price: "109.95",
                title: "Обогнал - женись",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "24",
                image:  "/images/mainPage/categorys/texts/17.png",
                price: "109.95",
                title: "Не гнилая а облегченная",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "25",
                image:  "/images/mainPage/categorys/texts/18.png",
                price: "109.95",
                title: "Просто рамка",
            },
            {
                category: "texts",
                description: "Тут мог бы быть ваш текст",
                id: "26",
                image:  "/images/mainPage/categorys/texts/19.png",
                price: "109.95",
                title: "Любой ваш текст",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "27",
                image:  "/images/mainPage/categorys/texts/20.png",
                price: "109.95",
                title: "PornHub",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "28",
                image:  "/images/mainPage/categorys/texts/21.png",
                price: "109.95",
                title: "Я девочка мне можно",
            },
            {
                category: "texts",
                description: "Это один из примеров, Вы можете выбрать любой текст надписи!",
                id: "29",
                image:  "/images/mainPage/categorys/texts/22.png",
                price: "109.95",
                title: "Главное двигаться",
            },
        ],
        footbal: [
            {
                category: "footbal",
                description: "Футбольная тематика",
                id: "300",
                image:  "/images/mainPage/categorys/footbal/1.png",
                price: "109.95",
                title: "Dinamo Minsk",
            },
            {
                category: "footbal",
                description: "Футбольная тематика",
                id: "301",
                image:  "/images/mainPage/categorys/footbal/2.png",
                price: "109.95",
                title: "FC Barselona",
            },
            {
                category: "footbal",
                description: "Футбольная тематика",
                id: "302",
                image:  "/images/mainPage/categorys/footbal/3.png",
                price: "109.95",
                title: "Realmadrid",
            },
            {
                category: "footbal",
                description: "Футбольная тематика",
                id: "304",
                image:  "/images/mainPage/categorys/footbal/5.png",
                price: "109.95",
                title: "CSKA MOSCOW",
            },
            {
                category: "footbal",
                description: "Футбольная тематика",
                id: "305",
                image:  "/images/mainPage/categorys/footbal/6.png",
                price: "109.95",
                title: "FC MANCHESTER UNITED",
            },
            {
                category: "footbal",
                description: "Футбольная тематика",
                id: "307",
                image:  "/images/mainPage/categorys/footbal/8.png",
                price: "109.95",
                title: "FC MANCHESTER UNITED",
            },
            {
                category: "footbal",
                description: "Футбольная тематика",
                id: "308",
                image:  "/images/mainPage/categorys/footbal/9.png",
                price: "109.95",
                title: "Arsenal",
            },
            {
                category: "footbal",
                description: "Футбольная тематика",
                id: "309",
                image:  "/images/mainPage/categorys/footbal/10.png",
                price: "109.95",
                title: "JUVENTUS",
            },
        ],
        flags: [
            {
                category: "flags",
                description: "Флаг любой страны в любом оформлении и дизайне",
                id: "201",
                image:  "/images/mainPage/categorys/flags/1.png",
                price: "109.95",
                title: "Japan",
            },
            {
                category: "flags",
                description: "Флаг любой страны в любом оформлении и дизайне",
                id: "202",
                image:  "/images/mainPage/categorys/flags/2.png",
                price: "109.95",
                title: "Germany",
            },
            {
                category: "flags",
                description: "Флаг любой страны в любом оформлении и дизайне",
                id: "203",
                image:  "/images/mainPage/categorys/flags/3.png",
                price: "109.95",
                title: "Italy",
            },
            {
                category: "flags",
                description: "Флаг любой страны в любом оформлении и дизайне",
                id: "204",
                image:  "/images/mainPage/categorys/flags/4.png",
                price: "109.95",
                title: "France",
            },
            {
                category: "flags",
                description: "Флаг любой страны в любом оформлении и дизайне",
                id: "205",
                image:  "/images/mainPage/categorys/flags/5.png",
                price: "109.95",
                title: "United K",
            },
            {
                category: "flags",
                description: "Флаг любой страны в любом оформлении и дизайне",
                id: "206",
                image:  "/images/mainPage/categorys/flags/6.png",
                price: "109.95",
                title: "Sweden",
            },
            {
                category: "flags",
                description: "Флаг любой страны в любом оформлении и дизайне",
                id: "207",
                image:  "/images/mainPage/categorys/flags/7.png",
                price: "109.95",
                title: "Belarus",
            },{
                category: "flags",
                description: "Флаг любой страны в любом оформлении и дизайне",
                id: "208",
                image:  "/images/mainPage/categorys/flags/8.png",
                price: "109.95",
                title: "IDK",
            },

        ],
    }),
    actions: {
        getAllProducts(){
            // Объединить массивы из других стейтов в один массив "all"
            let newArr = [
                ...this.autos,
                ...this.themes,
                ...this.texts,
                ...this.footbal,
                ...this.flags
            ];
           newArr.forEach(el => {
               el.category = "all"
           })
            this.all = newArr
        }
    },
})
