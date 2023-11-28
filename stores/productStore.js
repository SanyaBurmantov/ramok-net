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
                examplePic: '/images/simpleFrame.png',
                description: 'Рамки с флагами стран'
            },
            {
                type: 'games',
                name: 'Футбол',
                examplePic: '/images/simpleFrame.png',
                description: 'Рамки на футбольную тематику'
            },
            {
                type: 'simple',
                name: 'Тематические',
                examplePic: '/images/simpleFrame.png',
                description: 'Игры/фильмы/книги'
            },
            {
                type: 'games',
                name: 'Надписи',
                examplePic: '/images/simpleFrame.png',
                description: 'Придумай свой текст рамки'
            },
            {
                type: 'simple',
                name: 'Модели авто',
                examplePic: '/images/simpleFrame.png',
                description: 'Номерная рамка под любую модель авто'
            },
            {
                type: 'games',
                name: 'Смотреть все',
                examplePic: '/images/simpleFrame.png',
                description: 'Каталог'
            }
        ]
    }),
})

