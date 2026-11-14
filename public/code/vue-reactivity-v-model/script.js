const { createApp, ref } = Vue;
createApp({
    template: '<input v-model="text" /><br/>{{ text }}',
    setup() {
        const text = ref("Bonjour");
        return { text };
    }
})
.mount('#app');
