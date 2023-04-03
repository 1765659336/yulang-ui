import Vue from "vue";
import YulangLoading from "@/packages/yulang-loading/YulangLoading.vue";
const YulangLoadingClass = Vue.extend(YulangLoading);

const communicationObj = {};
export default {
  // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  inserted(el, binding) {
    communicationObj.open = function () {
      const instance = new YulangLoadingClass({}).$mount();
      let positionCopy = el.style.position;
      el.style.position = "relative";
      el.appendChild(instance.$el);
      communicationObj.close = function () {
        el.style.position = positionCopy;
        // 删除自身，因为如果加载多个loading,removeChild()那么删除的loading不一定是el对应的子节点
        instance.$el && instance.$el.remove();
        instance.$destroy();
      };
    };
    binding.value && communicationObj.open();
  },
  //   指令所在组件的 VNode 及其子 VNode 全部更新后调用。
  componentUpdated(el, binding) {
    if (binding.value) {
      communicationObj.open && communicationObj.open();
    } else {
      communicationObj.close && communicationObj.close();
    }
  },
};
