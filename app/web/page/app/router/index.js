import Vue from 'vue';

import VueRouter from 'vue-router';

import ListView from './list';
import AppView from './app';

Vue.use(VueRouter);

export default function createRouter() {
  return new VueRouter({
    mode: 'history',
    base: '/',
    routes: [
      {
        path: '/',
        component: AppView
      },
      {
        path: '/list',
        component: ListView
      }
      // {
      //   path: '/detail/:id',
      //   component: () => import('./detail')
      // }
    ]
  });
}

