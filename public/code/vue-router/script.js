import AppHome from './AppHome.js'
import AppHistory from './AppHistory.js'

const { createMemoryHistory, createRouter } = VueRouter;
const { createApp } = Vue;

const routes = [
    { path: '/', component: AppHome },
    { path: '/history', component: AppHistory },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

createApp({})
    .use(router)
    .mount('#app');
