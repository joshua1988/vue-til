import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import * as filters from './utils/filters.js';

Vue.config.productionTip = false;

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
