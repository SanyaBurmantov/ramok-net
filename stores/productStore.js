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
        all: [
            {
                category: "all",
                description: "Модель вашего любимого авто",
                id: "1",
                image:  "/images/mainPage/categorys/autos/4.1.jpg",
                price: "109.95",
                title: "Имя(название)",
            },
            {
                category: "all",
                description: "Флаги блин)",
                id: "2",
                image:  "/images/mainPage/categorys/flags/1.1.jpg",
                price: "109.95",
                title: "Флаг страны",
            },
            {
                category: "all",
                description: "Футбольная тематика",
                id: "3",
                image:  "/images/mainPage/categorys/footbal/5.1.jpg",
                price: "109.95",
                title: "Имя(команды)",
            },
            {
                category: "all",
                description: "Надпись придумай сам",
                id: "4",
                image:  "/images/mainPage/categorys/texts/3.1.jpg",
                price: "109.95",
                title: "Текст(любой)",
            },
            {
                category: "all",
                description: "Игры фильмы книги",
                id: "5",
                image:  "/images/mainPage/categorys/themes/2.1.jpg",
                price: "109.95",
                title: "Текст или что угодно",
            }
        ],
        autos: [
            {
                category: "autos",
                description: "Модель вашего любимого авто",
                id: "6",
                image:  "/images/mainPage/categorys/autos/4.1.jpg",
                price: "109.95",
                title: "Имя(название)",
            }
        ],
        themes: [
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "7",
                image:  "/images/mainPage/categorys/themes/2.1.jpg",
                price: "109.95",
                title: "Текст или что угодно",
            }
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
                id: "30",
                image:  "/images/mainPage/categorys/footbal/5.1.jpg",
                price: "109.95",
                title: "Имя(команды)",
            }
        ],
        flags: [
            {
                category: "flags",
                description: "Флаги блин)",
                id: "31",
                image:  "/images/mainPage/categorys/flags/1.1.jpg",
                price: "109.95",
                title: "Флаг страны",
            }
        ],
    })
})
 