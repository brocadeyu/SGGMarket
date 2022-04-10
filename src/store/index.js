import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex);
import home from './home'
import search from './search'
//vuex模块式开发
export default new Vuex.Store({
   modules:{
      home,
      search
   }
});