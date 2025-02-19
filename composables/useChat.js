export function useChat() {
    const config = useRuntimeConfig();
    const messages = ref([]);

    const sendMessage = async (userId, message) => {
        try {
            // Immediately add the user's message to the chat
            messages.value.push({ role: 'user', text: message });

            // Add a temporary placeholder message for the bot's response.
            const placeholderIndex = messages.value.length;
            messages.value.push({ role: 'bot', text: 'Waiting for response...' });

            // Send the message to your API
            const response = await $fetch(`${config.public.apiBase}/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: { user_id: userId, input: message },
            });

            // Replace the placeholder with the actual response from the API
            messages.value[placeholderIndex] = { role: 'bot', text: response.response };

            return response.response;
        } catch (error) {
            console.error('Chat API error:', error);
            messages.value.push({ role: 'bot', text: 'Error: Could not get response.' });
        }
    };

    return { messages, sendMessage };
}
