const { createApp, ref } = Vue;
createApp({
    template: `<button @click="click">
        {{ a.b.counter }}</button>`,
    setup() {
        const a = ref({
            b: { counter: 0 },
        });
        function click() {
            a.value.b.counter++;
        }
        return { a, click }
    }
}).mount('#app');
