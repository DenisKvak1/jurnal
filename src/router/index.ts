import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/page/MainPage.vue';
import AuthenticationPage from '@/page/AuthenticationPage.vue';
import MyProfile from '@/page/MyProfile.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: AuthenticationPage,
    },
    {
        path: '/account',
        name: 'Account',
        component: MyProfile,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
