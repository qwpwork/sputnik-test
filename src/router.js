import Vue from 'vue'
import Router from 'vue-router'


import PageWeather from './components/PageWeather'
import PageGallery from './components/PageGallery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/weather',
      component: PageWeather
    },
    {
      path: '/gallery',
      component: PageGallery
    }
  ]
})
