import Vue from 'vue'
import Router from 'vue-router'

const Tabs = () => import( '../components/Tabs')

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/tariffs',
            name: 'Tariffs',
            component: Tabs
        },
    ]
});

export default router;
