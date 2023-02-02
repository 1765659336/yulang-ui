import YulangButton from "./yulang-button/YulangButton.vue";
import YulangSlider from "./yulang-slider/YulangSlider.vue";
import YulangSignaure from "./yulang-signaure/YulangSignaure.vue";
import YulangSwitch from "./yulang-switch/YulangSwitch.vue";
import YulangUpload from "./yulang-upload/YulangUpload.vue";
import YulangCanvas from "./yulang-canvas/YulangCanvas.vue";
import YulangAnchorPoint from "./yulamg-anchor-point/YulangAnchorPoint.vue";

// 引入icon
import "../assets/icon/iconfont.css";
// 阿里图标初始化样式文件
import "../assets/icon/reset.css";

// 自定义指令
import Copy from "@/instruction/copy";
// 自定义指令
export const Directives = {
  Copy,
};

export const Packages = [
  YulangButton,
  YulangSlider,
  YulangSignaure,
  YulangSwitch,
  YulangUpload,
  YulangCanvas,
  YulangAnchorPoint,
];

const install = function (Vue, option) {
  console.log(option);
  Packages.forEach((component) => {
    Vue.component(component.name, component);
  });
  Object.keys(Directives).forEach((key) => {
    Vue.directive(key, Directives[key]);
  });
};

// 判断是否直接引入的LjUI组件库，如果是，那么就把所有的组件注册成全局组件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  YulangButton,
  YulangSlider,
  YulangSignaure,
  YulangSwitch,
  YulangUpload,
  YulangCanvas,
  YulangAnchorPoint,
};
