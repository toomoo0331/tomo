import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'

import HelloWorld from '@/components/HelloWorld'
import IndexWorld from '@/components/index'
import HowToUse from '@/components/howtouse'
import Article from '@/components/article'
import Detail from '@/components/detail'
import Reservation from '@/components/reservation'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/index#top/',
      name: 'index',
      component: IndexWorld
    },
    {
      path: '/index#about/',
      name: 'index-about',
      component: IndexWorld
    },
    {
      path: '/index#price/',
      name: 'index-price',
      component: IndexWorld
    },
    {
      path: '/index#photo/',
      name: 'index-photo',
      component: IndexWorld
    },
    {
      path: '/index#access/',
      name: 'index-access',
      component: IndexWorld
    },
    {
      path: '/howtouse/',
      name: 'howtouse',
      component: HowToUse
    },
    {
      path: '/article/',
      name: 'article',
      component: Article
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/reservation/',
      name: 'reservation',
      component: Reservation
    }
  ]
})
