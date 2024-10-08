import { createWebHistory, createRouter } from 'vue-router'
import Layout from "../layout/index.vue"
import { registerGuard } from "./Guard";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import("../views/login/index.vue"),
    },
    {
        path: '/settings',
        component: Layout,
        children: [{
            path: "B2C",
            name: "B2C",
            meta: {
                title: 'B2C',
                icon: 'House',
                requireAuth: true,
            },
            component: () => import("../views/B2C/index.vue"),
        },
        {
            path: "B2B",
            name: "B2B",
            meta: {
                title: 'B2B',
                icon: 'House',
                requireAuth: true,
            },
            component: () => import("../views/B2B/index.vue"),

        }]
    },
    {
        path: '/failed',
        name: 'Failed',
        component: () => import("../components/Failed.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

registerGuard(router);

export default router;