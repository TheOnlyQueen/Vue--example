import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../views/index/index'
// 在路由配置中引入我们刚创建的首页，并更改一下路由配置
import Manage from '../views/manage/index'

Vue.use(Router)

export default new Router({
  // 更改路由配置
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
  ]
})
