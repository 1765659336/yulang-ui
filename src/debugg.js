import Vue from "vue";
// 阿里图标初始化样式文件
import "@/assets/icon/reset.css";
// 引入icon
import "@/assets/icon/iconfont.css";
import { Packages, Directives, CreateNode } from "@/packages/index";

// 引入自定义方法(通知)
import "@/packages/yulang-notification/index";

Packages.forEach((component) => {
  Vue.component(component.name, component);
});

Object.keys(Directives).forEach((key) => {
  Vue.directive(key, Directives[key]);
});

CreateNode.forEach((createNodeObj) => {
  Vue.prototype[createNodeObj.name] = createNodeObj.value;
});