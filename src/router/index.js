import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ServicesPage from '@/components/ServicesPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/services',
      name: 'Services',
      component: ServicesPage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: HomePage
    }
  ]
})
