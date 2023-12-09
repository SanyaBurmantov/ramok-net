import { defineStore } from 'pinia'

export const useSwiperPicturesStore = defineStore('storeId', {
    state: () => {
        return {
            mainPagePictures: [
                {
                    name: 'slide1',
                    url: '/images/mainPage/page1.jpg',
                },
                {
                    name: 'slide2',
                    url: '/images/mainPage/page2.jpg',
                },
                {
                    name: 'slide3',
                    url: '/images/mainPage/page3.jpg',
                }
            ]
        }
    },
})
