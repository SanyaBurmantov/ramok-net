import { defineStore } from 'pinia'


export const useRouterStore = defineStore('route', {
    state: () => ({
        currentCategory: '',
        currentProduct: {}
    }),

    actions: {
        setCategory(category) {
            this.currentCategory = category;

        },
        getCategory(){
            return this.currentCategory
        },
        setProduct(product) {
            this.currentProduct = product
        },
        getCurrentProduct(){
            return this.currentProduct
        }
    },
    persist: {
        storage: persistedState.localStorage,
    },
})