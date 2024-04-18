
import { defineStore } from 'pinia'

export const useSheet = defineStore('sheet', {
    state: () => ({ isOpen: false, }),

    actions: {


        onOpen() {

            this.isOpen = true
        },
        onClose() {

            this.isOpen = false
        }


    },
})