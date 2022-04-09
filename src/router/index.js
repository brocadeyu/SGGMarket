import Vue from "vue";
import VueRouter from "vue-router";
//引入相关
Vue.use(VueRouter);
//使用插件

let originPush = VueRouter.prototype.push;
//保存原来的push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
//重写push方法
import MyHome from "../pages/MyHome.vue";
import MyLogin from "../pages/MyLogin.vue";
import MyRegister from "../pages/MyRegister.vue";
import MySearch from "../pages/MySearch.vue";

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: MyHome,
      meta: { showfoot: true },
    },
    {
      path: "/search/:keyword?",
      component: MySearch,
      meta: { showfoot: true },
      name: "search",
    },
    {
      path: "/login",
      component: MyLogin,
      meta: { showfoot: false },
    },
    {
      path: "/register",
      component: MyRegister,
      meta: { showfoot: false },
    },
    {
      path: "*",
      redirect: "/home",
      meta: { showfoot: false },
    },
    //重定向
  ],
});
