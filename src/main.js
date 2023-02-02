import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入样式重置文件
import "normalize.css";
import "@/assets/style/public.less";

// 全局注册自定义组件
import yulangUi from "yulang-ui";
import "yulang-ui/yulang-ui-dist/yulang-ui.css";
Vue.use(yulangUi, { instruction: ["loading"] });
// element引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 注册ele
Vue.use(ElementUI, { size: "small", zIndex: 3000 });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
