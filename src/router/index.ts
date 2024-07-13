import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/page/MainPage.vue';
import AuthenticationPage from '@/page/AuthenticationPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: AuthenticationPage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
