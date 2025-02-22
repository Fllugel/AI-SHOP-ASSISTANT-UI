import { defineStore } from 'pinia'

export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: [],
    }),
    actions: {
        addMessage(role, text) {
            this.messages.push({ role, text })
        },
        clearMessages() {
            this.messages = []
        },
    },
    persist: true,
})
