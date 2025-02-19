export function useClearHistory() {
    const config = useRuntimeConfig();

    const clearHistory = async (userId) => {
        try {
            const response = await $fetch(`${config.public.apiBase}/clear_history`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: { user_id: userId },
            });
            return response;
        } catch (error) {
            console.error('Clear history API error:', error);
            throw error;
        }
    };

    return { clearHistory };
}
