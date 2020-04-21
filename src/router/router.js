import Vue from 'vue'
import Router from 'vue-router'

import artCatalog from '../components/art-catalog'
import artTrash from '../components/art-trash'
import artMain from '../components/art-main'
import artItemPage from '../components/art-item-page'
import Login from '../components/art-login'
import Register from '../components/art-register'
import Dashboard from '../components/art-dashboard'



Vue.use(Router);
let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Main',
            component: artMain

        },

        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        
       
        {
            path: '/catalog',
            name: 'Catalog',
            component: artCatalog
        },
        {
            path: '/item',
            name: 'Item',
            component: artItemPage
        },
        {
            path: '/trash',
            name: 'Trash',
            component: artTrash,
            props: true

        }
    ]
})

export default router;
