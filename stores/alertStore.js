import { defineStore } from 'pinia'


export const useAlertStore = defineStore('alert', {
    state: () => ({
        alert: ""
    }),

    actions: {
        showAlert(message, time) {
            this.alert = message
            this.removeAlert(time)
        },
        removeAlert(time) {
            setTimeout(()=> {
                this.alert = []
            },time)
        },
    },
})