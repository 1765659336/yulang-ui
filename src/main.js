import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入样式重置文件
import "normalize.css";
import "@/assets/style/public.less";

// 全局注册自定义组件
// import yulangUi from "yulang-ui";
// import "yulang-ui/yulang-ui-dist/yulang-ui.css";
// Vue.use(yulangUi, { instruction: ["loading"] });

// yulangUi下引入z - index
// const Index = yulangUi.Lib.Index;
// Vue.prototype.$index = new Index(3000)

// element引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI, { size: "small", zIndex: 3000 });

// 与全局注册自定义组件相反引入，便于开发packages组件库时，本地调试用
import "./debugg.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
