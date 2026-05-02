const { createApp, ref } = Vue;

const AppButton = {
    template: `<button :style="position" @click.stop="remove">X</button>`,
    props: ['position'],
    setup() {
        return {
            remove: e => e.target.remove()
        };
    }
}

const app = createApp({
    setup() {
        const positions = ref([]);
        document.addEventListener('click', ({ x, y }) =>
            positions.value.push({ left: `${x}px`, top: `${y}px` }));
        return { positions };
    }
});
app.component('app-button', AppButton);
app.mount('#app');
