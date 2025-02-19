export default defineNuxtPlugin(() => {
    window.addEventListener('beforeunload', () => {
        const userId = localStorage.getItem('chatUserId');
        if (userId) {
            const config = useRuntimeConfig();
            const url = `${config.public.apiBase}/clear_history`;
            const data = JSON.stringify({ user_id: userId });
            const blob = new Blob([data], { type: 'application/json' });
            navigator.sendBeacon(url, blob);
            localStorage.removeItem('chatUserId');
        }
    });
});
