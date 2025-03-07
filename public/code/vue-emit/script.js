const { createApp, ref } = Vue;

const AppButton = {
    template: `<button :style @click.stop="remove">X</button>`,
    props: ['position'],
    emit: ['remove'],
    setup({ position }, { emit }) {
        return {
            style: { left: `${position.x}px`, top: `${position.y}px` },
            remove: () => emit('remove', position.key),
        };
    }
}

createApp({
    setup() {
        const positions = ref([]);
        document.addEventListener('click', ({ x, y }) =>
            positions.value.push({ x, y, key: `${x},${y}` }));
        return {
            positions,
            remove: (key) => positions.value = positions.value
                .filter(p => p.key !== key),
        };
    }
})
.component('app-button', AppButton)
.mount('#app');
