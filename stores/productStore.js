import { defineStore } from 'pinia'

export const useProductStore = defineStore('storeId', {
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            count: 0,
            name: 'Eduardo',
            isAdmin: true,
            items: [],
            hasChanged: true,
        }
    },
})

export const useCategoriesStore = defineStore('categoryStore', {
    state: () => ({
        categories: [
            {
                type: 'simple',
                name: 'Флаги',
                examplePic: '/images/mainPage/categorys/catalog1.png',
                description: 'Рамки с флагами стран'
            },
            {
                type: 'games',
                name: 'Футбол',
                examplePic: '/images/mainPage/categorys/catalog2.png',
                description: 'Рамки на футбольную тематику'
            },
            {
                type: 'simple',
                name: 'Тематические',
                examplePic: '/images/mainPage/categorys/catalog3.png',
                description: 'Игры/фильмы/книги'
            },
            {
                type: 'games',
                name: 'Надписи',
                examplePic: '/images/mainPage/categorys/catalog4.png',
                description: 'Придумай свой текст рамки'
            },
            {
                type: 'simple',
                name: 'Модели авто',
                examplePic: '/images/mainPage/categorys/catalog5.png',
                description: 'Номерная рамка под любую модель авто'
            },
            {
                type: 'games',
                name: 'Смотреть все',
                description: 'Каталог'
            }
        ]
    }),
})

