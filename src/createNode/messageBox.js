import Vue from "vue";
import YulangMessageBox from "@/packages/yulang-message-box/YulangMessageBox.vue";

const MessageBoxClass = Vue.extend(YulangMessageBox);

MessageBoxClass.getInstance = (function () {
  let instance = {};
  const fn = function (logo, option) {
    if (!instance[logo]) {
      instance[logo] = {};
      instance[logo].value = new MessageBoxClass(option);
      // exist代表之前存在吗
      instance[logo].exist = false;
    } else {
      instance[logo].exist = true;
    }
    return instance[logo];
  };
  fn.instance = instance;
  return fn;
})();

export default {
  MessageBoxClass,
};
