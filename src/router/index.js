import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Service from '../components/Service'
import Neighbor from '../components/Neighbor'
import Me from '../components/Me'
import Forum from '../components/Forum'

export default new Router({
  routes: [
    { path: '/service', component: Service },
    { path: '/neighbor', component: Neighbor },
    { path: '/me', component: Me },
    { path: '/forum', component: Forum }
  ]
})
