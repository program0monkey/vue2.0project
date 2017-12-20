// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vueresource from 'vue-resource'
import Layout from './components/layout.vue'
import IndexPage from './pages/index.vue'
import Detail from './pages/detail.vue'
import Yuce from './pages/detail/yuce.vue'
import Tongji from './pages/detail/tongji.vue'
import Guanggao from './pages/detail/guanggao.vue'
import Fenxi from './pages/detail/fenxi.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vueresource)

let router=new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:IndexPage
    },
    {
      path:'/detail',
      component:Detail,
      children:[
          {
            path:'tongji',
            component:Tongji
          },
          {
            path:'yuce',
            component:Yuce
          },
          {
            path:'fenxi',
            component:Fenxi
          },
          {
            path:'guanggao',
            component:Guanggao
          },
      ]
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Layout/>',
  router,
  components: {
    Layout
  }
})
