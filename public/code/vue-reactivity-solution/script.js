const { createApp, ref } = Vue;
createApp({
    template: `<button @click="click">
        {{ counter }}</button>`,
    setup() {
        const counter = ref(0);
        function click() {
            counter.value++;
        }
        return { counter, click }
    }
}).mount('#app');
