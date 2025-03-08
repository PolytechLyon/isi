import AppHome from './AppHome.js'
import AppHistory from './AppHistory.js'

const { createApp, ref, computed } = Vue;

const routes = { '/': AppHome, '/history': AppHistory };
const currentPath = ref(window.location.hash);
addEventListener('hashchange', () => currentPath.value = window.location.hash);
const CurrentView = computed(() => routes[currentPath.value.slice(1) || '/']);
createApp({
    setup() {
        return { CurrentView };
    }
}).mount('#app');
