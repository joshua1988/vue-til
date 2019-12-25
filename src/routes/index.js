import Vue from 'vue';
import Router from 'vue-router';
import LoginView from '../views/LoginView';
import SignupView from '../views/SignupView';
import MainView from '../views/MainView';
import PostAddView from '../views/PostAddView';
import PostDetailView from '../views/PostDetailView';
import store from '../store';
import { getUserFromCookie } from '../utils/cookies.js';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login',
		},
		{
			path: '/login',
			name: 'login',
			component: LoginView,
			beforeEnter(to, from, next) {
				store.getters['isLoggedIn'] ? next('/main') : next();
			},
		},
		{
			path: '/signup',
			name: 'signup',
			component: SignupView,
		},
		{
			path: '/main',
			name: 'main',
			component: MainView,
			beforeEnter,
		},
		{
			path: '/new',
			name: 'new',
			component: PostAddView,
			beforeEnter,
		},
		{
			path: '/post/:id',
			name: 'detail',
			component: PostDetailView,
			beforeEnter,
		},
	],
});

function beforeEnter(to, from, next) {
	if (store.getters['isLoggedIn'] || getUserFromCookie()) {
		next();
	} else {
		alert('sign in please');
		next('/login');
	}
}
