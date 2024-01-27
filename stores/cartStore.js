import { defineStore } from 'pinia'


export const useCartStore = defineStore('cart', {
    state: () => ({
        cart: []
    }),

    actions: {
        addToCart(product) {
            this.cart.push(product)

        },
        removeFromCart(product) {
            this.cart = this.cart.filter(item => item.id !== product.id);

        },
    },
    persist: {
        storage: persistedState.localStorage,
    },
})