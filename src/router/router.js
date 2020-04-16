import Vue from 'vue'
import Router from 'vue-router'

import artCatalog from '../components/art-catalog'
import artTrash from '../components/art-trash'
import artMain from '../components/art-main'
import artItemPage from '../components/art-item-page'
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
