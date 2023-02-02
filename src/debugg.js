import Vue from "vue";
// 阿里图标初始化样式文件
import '@/assets/icon/reset.css';
// 引入icon
import '@/assets/icon/iconfont.css';
import { Packages } from "@/packages/index";
Packages.forEach((component) => {
  Vue.component(component.name, component);
});