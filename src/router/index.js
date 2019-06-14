import Vue from 'vue'
import Router from 'vue-router'
import Login from 'views/Login'
import MainPage from 'views/MainPage'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/Login',
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/MainPage',
            name: 'MainPage',
            component: MainPage,
            redirect: '/Discover',
            children: [
                {
                    path: '/Discover',
                    name: 'Discover',
                    component: () => import(`views/Discover.vue`),
                },
                {
                    path: '/Mine',
                    name: 'Mine',
                    component: () => import(`views/Mine.vue`),
                },
                {
                    path: '/Account',
                    name: 'Account',
                    component: () => import(`views/Account.vue`),
                }
            ]
        },
        {
            path: '/404',
            component: () => import(`views/NotFoundPage.vue`),
            name: '404',
            hidden: true
        },
        {
            path: '*',
            redirect: '/404',
            hidden: true
        }
    ]
})
