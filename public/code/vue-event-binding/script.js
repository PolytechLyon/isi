const { createApp, ref } = Vue;
createApp({
    setup() {
        const text = ref('Hello');
        function toggleText() {
            text.value = text.value === 'Hello' ? 'Hi' : 'Hello';
        }
        return { text, toggleText };
    }
})
.mount('#app');
