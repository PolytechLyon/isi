const { createApp, ref, computed, readonly, onMounted, onUnmounted } = Vue;

class Coordinare {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get style() {
        return { left: `${this.x}px`, top: `${this.y}px` };
    }

    get key() {
        return `${this.x},${this.y}`;
    }
}

const list = ref([]);
const coordinates = readonly(list);

/**
 * Store mouse clicks in a reactive array.
 * @returns {{coordinates: { x: number, y: number }}}
 */
function useClickCoordinates() {
    function add({ x, y }) {
        list.value.push(new Coordinare(x, y));
    }
    function remove({ key }) {
        list.value = list.value.filter(c => c.key !== key);
    }
    onMounted(() => document.addEventListener('click', add));
    onUnmounted(() => document.removeEventListener('click', add));
    return { coordinates, remove };
}

const AppButton = {
    template: `<button :style @click.stop="remove">X</button>`,
    props: ['coordinate'],
    setup({ coordinate }) {
        const { remove } = useClickCoordinates();
        return {
            style: coordinate.style,
            remove: () => remove(coordinate),
        };
    }
}

createApp({
    setup() {
        const { coordinates } = useClickCoordinates();
        return { coordinates };
    }
})
.component('app-button', AppButton)
.mount('#app');
