const { ref, readonly, computed } = Vue;

class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.removed = false;
    }

    get style() {
        return { left: `${this.x}px`, top: `${this.y}px` };
    }

    get key() {
        return `${this.x},${this.y}`;
    }
}

const list = ref([]);
const coordinates = computed(() => list.value.filter(c => !c.removed));
const history = readonly(list);

function add({ x, y, target }) {
    if (target instanceof HTMLHtmlElement) {
        list.value.push(new Coordinate(x, y));
    }
}
function remove(coordinate) {
    coordinate.removed = true;
}

document.addEventListener('click', add);

/**
 * Manage mouse clicks and their history in a reactive way.
 */
export default function useClickCoordinates() {
    return { coordinates, history, remove };
}
