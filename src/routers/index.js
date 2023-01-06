import { createRouter, createWebHistory } from 'vue-router'

import GraphCovid from '../components/GraphCovid.vue'
// import Hello from '../components/HelloWorld.vue'
import CovidTable from '../components/CovidTable.vue'



const routes = [{
        path: '/',
        name: 'graph',
        component: GraphCovid
    },
    {
        path: '/hello',
        name: 'hello',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../components/HelloWorld.vue')
    },
    {
        path: '/table',
        name: 'table',
        component: CovidTable
    },
    {
        path: '/Worldwide',
        name: 'Worldwide',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../view/TableWorldwide.vue')
    },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router