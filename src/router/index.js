import Vue from 'vue'
import Router from 'vue-router'
import ToDo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ToDo',
      component: ToDo
    }
  ]
})
