import Vue from "vue";
import YulangLoading from "@/packages/yulang-loading/YulangLoading.vue";
const YulangLoadingClass = Vue.extend(YulangLoading);

const communicationObj = {};
export default {
  // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
  inserted(el) {
    communicationObj.open = function () {
      const instance = new YulangLoadingClass({
        data() {
          return {
            height: el.offsetHeight + "px",
            width: el.offsetWidth + "px",
          };
        },
      }).$mount();
      let positionCopy = el.style.position;
      el.style.position = "relative";
      el.appendChild(instance.$el);
      communicationObj.close = function () {
        el.style.position = positionCopy;
        el.removeChild(instance.$el);
        instance.$destroy();
      };
    };
    communicationObj.open();
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
