import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入样式重置文件
import "normalize.css";

// 全局注册自定义组件
// import yulangUI, { changeDefault } from "yulang-ui";
// import "yulang-ui/yulang-ui-dist/yulang-ui.css";
// Vue.use(yulangUI);
// console.log(yulangUI, "yulangUI", changeDefault, "changeDefault");
// changeDefault(Vue, {
//   themeCssVariable: {
//     "--yulang-theme-color--": "#00DF74",
//   },
// });

// 判断是移动端还是PC端
import { isMobile } from "@/packages/lib";
Vue.prototype.IsMobile = isMobile();

// element引入
// import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
// Vue.use(ElementUI, { size: "small", zIndex: 3000 });

// 与全局注册自定义组件相反引入，便于开发packages组件库时，本地调试用
import "./debugg.js";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
