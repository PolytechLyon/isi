const { createApp, ref } = Vue;

let lastKey = 0;

const AppButton = {
    template: `<button :style @click.stop="remove">X</button>`,
    props: ['coordinate'],
    emits: ['remove'],
    setup({ coordinate }, { emit }) {
        return {
            style: { left: `${coordinate.x}px`, top: `${coordinate.y}px` },
            remove: () => emit('remove', coordinate.key),
        };
    }
}

createApp({
    setup() {
        const coordinates = ref([]);
        document.addEventListener('click', ({ x, y }) =>
            coordinates.value.push({ x, y, key: lastKey++ }));
        return {
            coordinates,
            removeCoordinate(key) {
                coordinates.value = coordinates.value.filter(p => p.key !== key);
            },
        };
    }
})
.component('app-button', AppButton)
.mount('#app');
