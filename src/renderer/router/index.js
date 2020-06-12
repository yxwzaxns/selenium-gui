import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: require('@/pages/main').default
    },
    {
      path: '/create',
      name: 'create',
      component: require('@/pages/create').default
    },
    {
      path: '/list',
      name: 'list',
      component: require('@/pages/list').default
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/pages/settings').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
