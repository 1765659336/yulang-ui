import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入样式重置文件
import "normalize.css";
import "@/assets/style/public.less";

// 引入自定义组件
import { Packages } from "@/packages";
// 全局注册自定义组件
for (const key in Packages) {
  if (Object.hasOwnProperty.call(Packages, key)) {
    const element = Packages[key];
    Vue.component(key, element);
  }
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
