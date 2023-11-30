import { defineStore } from 'pinia'

export const useSwiperPicturesStore = defineStore('storeId', {
    state: () => {
        return {
            mainPagePictures: [
                {
                    name: 'slide1',
                    url: '/images/mainPage/mainImage1.png',
                },
                {
                    name: 'slide2',
                    url: '/images/mainPage/mainImage2.png',
                },
                {
                    name: 'slide3',
                    url: '/images/mainPage/mainImage3.png',
                }
            ]
        }
    },
})
