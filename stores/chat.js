export const useChatStore = defineStore('chat', {
    state: () => ({
        messages: [],
    }),
    actions: {
        addMessage(role, payload) {
            // Accept either a string or an object payload (e.g., { items: {...} })
            if (typeof payload === 'object' && payload !== null) {
                this.messages.push({ role, ...payload })
            } else {
                this.messages.push({ role, text: payload })
            }
        },
        clearMessages() {
            this.messages = []
        },
    },
    persist: true,
})
