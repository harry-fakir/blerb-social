import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Features from '../views/Features.vue'
import Login from '../views/Login.vue'
import GetStarted from '../views/GetStarted.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },

    {
        path: '/features',
        name: 'Features',
        component: Features
    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/getstarted',
        name: 'GetStarted',
        component: GetStarted
    }
]


const router = new VueRouter({
    routes
})

export default router


