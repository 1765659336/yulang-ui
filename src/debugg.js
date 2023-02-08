import Vue from "vue";
// 阿里图标初始化样式文件
import "@/assets/icon/reset.css";
// 引入icon
import "@/assets/icon/iconfont.css";
import { Packages, Directives } from "@/packages/index";

// 引入自定义方法(通知)
import "@/packages/yulang-notification/index";

// 引入全局index
import Index from '@/tools/getIndex'
Vue.prototype.$index = new Index(3000)

Packages.forEach((component) => {
  Vue.component(component.name, component);
});

Object.keys(Directives).forEach((key) => {
  Vue.directive(key, Directives[key]);
});
