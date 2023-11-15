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
                name: 'Обычные',
                examplePic: '/images/simpleFrame.png',
                description: 'Вы можете указать любой цвет и любой текст рамки'
            },
            {
                type: 'games',
                name: 'Игры',
                examplePic: '/images/simpleFrame.png',
                description: 'Рамки с дизайном из игр'
            }
        ]
    }),
})

