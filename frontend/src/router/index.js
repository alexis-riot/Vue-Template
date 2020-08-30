import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import(/* webpackChunkName: "baselayout" */ '@/layouts/DashboardLayout.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/Index.vue'),
            },
            {
                path: '/about',
                name: 'about',
                component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
            }
        ]
    },
    {
        path: '/',
        component: () => import(/* webpackChunkName: "authlayout" */ '@/layouts/AuthLayout.vue'),
        children: [
            {
                path: '/login',
                name: 'login',
                component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
            }
        ]
    },
]

const APP_PATH = `/${process.env.VUE_APP_PATH || ''}`


const router = new VueRouter({
    base: APP_PATH,
    mode: 'history',
    routes,
})

export default router
