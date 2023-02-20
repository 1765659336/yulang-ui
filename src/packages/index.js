// 自定义组件
import YulangButton from "@/packages/yulang-button/YulangButton.vue";
import YulangSlider from "@/packages/yulang-slider/YulangSlider.vue";
import YulangSignaure from "@/packages/yulang-signaure/YulangSignaure.vue";
import YulangSwitch from "@/packages/yulang-switch/YulangSwitch.vue";
import YulangUpload from "@/packages/yulang-upload/YulangUpload.vue";
import YulangCanvas from "@/packages/yulang-canvas/YulangCanvas.vue";
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangLink from "@/packages/yulang-link/YulangLink.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import YulangDialog from "@/packages/yulang-dialog/YulangDialog.vue";
import YulangBackTop from "@/packages/yulang-back-top/YulangBackTop.vue";
import YulangCheckbox from "@/packages/yulang-checkbox/YulangCheckbox.vue";
import YulangSwitchCopy from "@/packages/yulang-switch-copy/YulangSwitchCopy.vue";
import YulangForm from "@/packages/yulang-form/YulangForm.vue";
import YulangFormItem from "@/packages/yulang-form-item/YulangFormItem.vue";
import YulangInput from "@/packages/yulang-input/YulangInput.vue";
import YulangTable from "@/packages/yulang-table/YulangTable.vue";
import YulangTableItem from "@/packages/yulang-table-item/YulangTableItem.vue";
import YulangTree from "@/packages/yulang-tree/YulangTree.vue";
import YulangLeader from "@/packages/yulang-leader/YulangLeader.vue";
import YulangTabs from "@/packages/yulang-tabs/YulangTabs.vue";
import YulangTabPane from "@/packages/yulang-tab-pane/YulangTabPane.vue";
import YulangDivider from "@/packages/yulang-divider/YulangDivider.vue";
import YulangSelect from "@/packages/yulang-select/YulangSelect.vue";
import YulangPopover from "@/packages/yulang-popover/YulangPopover.vue";
import YulangTimePicker from "@/packages/yulang-time-picker/YulangTimePicker.vue";

// 引入icon
import "../assets/icon/iconfont.css";
// 阿里图标初始化样式文件
import "../assets/icon/reset.css";

// 自定义指令
import YulangCopy from "@/instruction/copy";
import YulangLoading from "@/instruction/loading";
import YulangLongClick from "@/instruction/longClick";
import YulangInfiniteScroll from "@/instruction/infiniteScroll";

// 自定义指令对象
export const Directives = {
  YulangCopy,
  YulangLoading,
  YulangLongClick,
  YulangInfiniteScroll
};

// 自定义函数
import { Loading } from "@/createNode/loading";
// 自定义函数对象
export const CreateNode = [{ name: "$yulangLoading", value: Loading }];

// 自定义组件数组
export const Packages = [
  YulangButton,
  YulangSlider,
  YulangSignaure,
  YulangSwitch,
  YulangUpload,
  YulangCanvas,
  YulangAnchorPoint,
  YulangDescribeFrame,
  YulangLink,
  YulangDialog,
  YulangBackTop,
  YulangCheckbox,
  YulangSwitchCopy,
  YulangForm,
  YulangFormItem,
  YulangInput,
  YulangTable,
  YulangTableItem,
  YulangTree,
  YulangLeader,
  YulangTabs,
  YulangTabPane,
  YulangDivider,
  YulangSelect,
  YulangPopover,
  YulangTimePicker
];

// 工具函数
import * as Lib from "@/packages/lib";

const install = function (Vue, option) {
  console.log(option);
  Packages.forEach((component) => {
    Vue.component(component.name, component);
  });

  Object.keys(Directives).forEach((key) => {
    Vue.directive(key, Directives[key]);
  });

  CreateNode.forEach((createNodeObj) => {
    Vue.prototype[createNodeObj.name] = createNodeObj.value;
  });
};

// 判断是否直接引入的LjUI组件库，如果是，那么就把所有的组件注册成全局组件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...Packages,
  Lib
};
