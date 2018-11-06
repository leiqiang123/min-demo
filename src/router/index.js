import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import richEdit from '../components/index'

Vue.use(Router)
Vue.use(richEdit)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/app',
      component: () => import('../views/webApp')
    },
    {
      path:'/app2',
      component: () => import('../views/webApp2')
    }
  ]
})
