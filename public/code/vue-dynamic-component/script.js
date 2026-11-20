import AppHome from './AppHome.js'
import AppHistory from './AppHistory.js'

const { createApp, ref, computed } = Vue;

const routes = { '/': AppHome, '/history': AppHistory };
const path = ref(window.location.hash);
window.addEventListener('hashchange',
    () => path.value = window.location.hash);
const CurrentView = computed(() => routes[path.value.slice(1)] ?? AppHome);
createApp({
    setup() {
        return { CurrentView };
    }
}).mount('#app');
