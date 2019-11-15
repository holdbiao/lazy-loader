import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import login from '@/components/login'

Vue.use(Router)
// 组件、路由懒加载的三种方法，打包后可查看结果
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      // webpack提供的require.ensure()
      component: resolve => require.ensure([], ()=>resolve(require('@/components/HelloWorld')), 'hello world')
    },
    {
      path: '/login',
      name: 'login',
      // es6 import
      //webpackChunkName 可以设置模块名字，当名字相同时候webpack会将模块打包在一起
      component: () => import(/* webpackChunkName: "login" */'@/components/login')
    },
    {
      path: '/reg',
      name: 'reg',
      /* vue异步组件技术 */
      component: resolve => require(['@/components/reg'],resolve)
    }
  ]
})
