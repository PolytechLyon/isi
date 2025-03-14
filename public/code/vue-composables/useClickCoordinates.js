const { ref, readonly } = Vue;

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
const coordinates = readonly(list);

function add({ x, y }) {
    list.value.push(new Coordinate(x, y));
}
function remove({ key }) {
    list.value = list.value.filter(c => c.key !== key);
}

document.addEventListener('click', add);

/**
 * Manage mouse clicks and their history in a reactive way.
 */
export default function useClickCoordinates() {
    return { coordinates, remove };
}
