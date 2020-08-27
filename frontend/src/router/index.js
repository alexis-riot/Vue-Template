import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "baselayout" */ '@/layouts/BaseLayout.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            }
        ]
    },
    {
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '@/layouts/AuthLayout.vue'),
        children: [
            {
                path: '/login',
                name: 'Login',
                component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
