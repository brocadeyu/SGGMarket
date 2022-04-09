import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入路由
Vue.config.productionTip = false
import TypeNav from './pages/TypeNav.vue'
Vue.component(TypeNav.name,TypeNav)
//注册全局组件
new Vue({
  render: h => h(App),
  router
  //注册路由
}).$mount('#app')
