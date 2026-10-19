const { createApp, ref } = Vue;
createApp({
    setup() {
        const text = ref('Click me');
        function toggleText() {
            text.value = text.value === 'Click me' ? 'Cliquez-moi' : 'Click me';
        }
        return { text, toggleText };
    }
})
.mount('#app');
