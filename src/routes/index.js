import Vue from 'vue';
import VueRouter from 'vue-router';
//import LoginPage from '../views/LoginPage.vue'
//import SignupPage from '../views/SignupPage.vue'

Vue.use(VueRouter);

export default new VueRouter({
    mode : history,
    routes: [
        {
            path:'/',
            redirect : '/login',
        },
        {
            path: '/login',
            components : () => import('@/views/LoginPage.vue'),
        },
        {
            path: '/signup',
            components : () => import('@/views/SignupPage.vue'),
        },
        {
            /* 나머지 모든 url에 대한 반응 */
            path: '*',
            component : () => import('@/views/NotFoundPage.vue'),
        },
    ],
});