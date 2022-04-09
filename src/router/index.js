import Vue from "vue";
import VueRouter from "vue-router";
//引入相关
Vue.use(VueRouter)
//使用插件
import MyHome from '../pages/MyHome.vue'
import MyLogin from '../pages/MyLogin.vue'
import MyRegister from '../pages/MyRegister.vue'
import MySearch from '../pages/MySearch.vue'

export default new VueRouter({

   routes:[
      {
         path:"/home",
         component:MyHome
      },
      {
         path:"/search",
         component:MySearch
      },
      {
         path:"/login",
         component:MyLogin
      },
      {
         path:"/register",
         component:MyRegister
      },
      {
         path:"*",
         redirect:"/home"
      }
      //重定向
   ]
})