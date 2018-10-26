import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import regiset from '@/components/regiset'


Vue.use(Router)

export default new Router({
  routes: [
    {
      // 注册页面
      path: '/regiset',
      name: 'Regiset',
      component: regiset
    },{
      // 登陆页面
    	path:"/login",
    	name:'Login',
    	component: login
    },{
      // 如果是根路径就去 login
      path:"/",
      redirect:"/login"
    },{
      // 所有错误的路径都去login 登陆页面
      path:"*",
      redirect:"/login"
    }
  ]
})
