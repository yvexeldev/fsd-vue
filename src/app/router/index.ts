import { createRouter, createWebHistory } from 'vue-router';
import { Home } from '@/pages';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
    ],
});

export { router };
