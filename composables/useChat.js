export function useChat() {
    const config = useRuntimeConfig()

    const sendMessage = async (userId, message) => {
        try {
            // Send the message to your API
            const response = await $fetch(`${config.public.apiBase}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: { user_id: userId, input: message },
            })
            return response
        } catch (error) {
            console.error('Chat API error:', error)
            return { response: 'Error: Could not get response.' }
        }
    }

    return { sendMessage }
}
