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
                id: "0",
                image:  "/images/mainPage/categorys/autos/4.1.jpg",
                price: "109.95",
                title: "Имя(название)",
            }
        ],
        themes: [
            {
                category: "themes",
                description: "Игры фильмы книги",
                id: "0",
                image:  "/images/mainPage/categorys/themes/2.1.jpg",
                price: "109.95",
                title: "Текст или что угодно",
            }
        ],
        texts: [
            {
                category: "texts",
                description: "Надпись придумай сам",
                id: "0",
                image:  "/images/mainPage/categorys/texts/3.1.jpg",
                price: "109.95",
                title: "Текст(любой)",
            }
        ],
        footbal: [
            {
                category: "footbal",
                description: "Футбольная тематика",
                id: "0",
                image:  "/images/mainPage/categorys/footbal/5.1.jpg",
                price: "109.95",
                title: "Имя(команды)",
            }
        ],
        flags: [
            {
                category: "flags",
                description: "Флаги блин)",
                id: "0",
                image:  "/images/mainPage/categorys/flags/1.1.jpg",
                price: "109.95",
                title: "Флаг страны",
            }
        ],
    })
})
 