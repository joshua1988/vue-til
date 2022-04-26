import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  mode: history,
  routes: [
    // Vue Router에 의해서 페이지(라우팅)의 정보를 배열의 형태로 담는 속성
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login', // path : url정보
      component: () => import('@/views/LoginPage.vue'), // component : 페이지 컴포넌트
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
