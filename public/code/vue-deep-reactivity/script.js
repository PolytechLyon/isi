const { createApp, ref } = Vue;
createApp({
    template: '{{ a.b.counter }}',
    setup() {
        const a = ref({
            b: { counter: 0 },
        });
        setInterval(() => a.value.b.counter++, 500);
        return { a }
    }
}).mount('#app');
