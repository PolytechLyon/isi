const { createApp } = Vue;
createApp({
    template: `<button @click="click">
        {{ counter }}</button>`,
    setup() {
        let counter = 0;
        function click() {
            counter++;
        }
        return { counter, click }
    }
}).mount('#app');
