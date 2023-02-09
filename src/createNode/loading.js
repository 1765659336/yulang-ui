import Vue from "vue";
import YulangLoading from "@/packages/yulang-loading/YulangLoading.vue";
const YulangLoadingClass = Vue.extend(YulangLoading);

export const Loading = (option = {}) => {
  const target = option.target
    ? document.querySelector(option.target)
    : document.querySelector("body");
  // 如果是对象则合并，有些属性既可以是函数，又可以是对象,写一个工具函数
  const instance = new YulangLoadingClass({
    data() {
      return {
        height: target.offsetHeight + "px",
        width: target.offsetWidth + "px",
      };
    },
  }).$mount();
  // 如果不是"body",则给目标dom添加相对定位
  let positionCopy;
  if (option.target !== "body") {
    positionCopy = target.style.position;
    target.style.position = "relative";
  }
  target.appendChild(instance.$el);
  return {
    close: function () {
      // 还原父容器的position
      target.style.position = positionCopy;
      instance?.$el?.parentNode?.removeChild(instance.$el);
      instance.$destroy();
    },
  };
};
