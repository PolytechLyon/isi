import AppHome from './AppHome.js'
import AppHistory from './AppHistory.js'

const { createWebHashHistory, createRouter } = VueRouter;
const { createApp } = Vue;

const routes = [
    { path: '/', component: AppHome },
    { path: '/history', component: AppHistory },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp({})
    .use(router)
    .mount('#app');
