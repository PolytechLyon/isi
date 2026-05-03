const { createApp, ref, computed } = Vue;
createApp({
    template: '<input v-model="text" /><br/>{{ reversed }}',
    setup() {
        const text = ref("");
        const reversed = computed(() => [...text.value].reverse().join(""));
        return { text, reversed };
    }
})
.mount('#app');
