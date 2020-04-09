import Vue from 'vue'
import Router from 'vue-router'

import artCatalog from '../components/art-catalog'
import artTrash from '../components/art-trash'

Vue.use(Router);
let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Catalog',
            component: artCatalog
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