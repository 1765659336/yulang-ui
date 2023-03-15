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
import YulangCheckboxGroup from "@/packages/yulang-checkbox-group/YulangCheckboxGroup.vue";
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
import YulangOption from "@/packages/yulang-option/YulangOption.vue";
import YulangPopover from "@/packages/yulang-popover/YulangPopover.vue";
import YulangTimePicker from "@/packages/yulang-time-picker/YulangTimePicker.vue";
import YulangTooltip from "@/packages/yulang-tooltip/YulangTooltip.vue";
import YulangConfirm from "@/packages/yulang-confirm/YulangConfirm.vue";
import YulangDrawer from "@/packages/yulang-drawer/YulangDrawer.vue";
import YulangCollapse from "@/packages/yulang-collapse/YulangCollapse.vue";
import YulangCollapseItem from "@/packages/yulang-collapse-item/YulangCollapseItem.vue";
import YulangSkeleton from "@/packages/yulang-skeleton/YulangSkeleton.vue";
import YulangRate from "@/packages/yulang-rate/YulangRate.vue";
import YulangRadioGroup from "@/packages/yulang-radio-group/YulangRadioGroup.vue";
import YulangRadio from "@/packages/yulang-radio/YulangRadio.vue";
import YulangContainer from "@/packages/yulang-container/YulangContainer.vue";
import YulangHeader from "@/packages/yulang-header/YulangHeader.vue";
import YulangAside from "@/packages/yulang-aside/YulangAside.vue";
import YulangMain from "@/packages/yulang-main/YulangMain.vue";
import YulangFooter from "@/packages/yulang-footer/YulangFooter.vue";
import YulangPagination from "@/packages/yulang-pagination/YulangPagination.vue";
import YulangTablePlus from "@/packages/yulang-table-plus/YulangTablePlus.vue";
import YulangTablePlusColumn from "@/packages/yulang-table-plus-column/YulangTablePlusColumn.vue";
import YulangColorPicker from "@/packages/yulang-color-picker/YulangColorPicker.vue";
import YulangTimeline from "@/packages/yulang-timeline/YulangTimeline.vue";
import YulangTimelineItem from "@/packages/yulang-timeline-item/YulangTimelineItem.vue";
import YulangDropdown from "@/packages/yulang-dropdown/YulangDropdown.vue";
import YulangDropdownMenu from "@/packages/yulang-dropdown-menu/YulangDropdownMenu.vue";
import YulangDropdownItem from "@/packages/yulang-dropdown-item/YulangDropdownItem.vue";
import YulangBreadcrumb from "@/packages/yulang-breadcrumb/YulangBreadcrumb.vue";
import YulangBreadcrumbItem from "@/packages/yulang-breadcrumb-item/YulangBreadcrumbItem.vue";
import YulangInputNumber from "@/packages/yulang-input-number/YulangInputNumber.vue";

// 引入icon
import "../assets/icon/iconfont.css";
// 阿里图标初始化样式文件
import "../assets/icon/reset.css";
// 引入动画样式文件
import "../assets/style/animate.css";

// 自定义指令
import YulangCopy from "@/instruction/copy";
import YulangLoading from "@/instruction/loading";
import YulangLongClick from "@/instruction/longClick";
import YulangInfiniteScroll from "@/instruction/infiniteScroll";
import YulangClickOutside from "@/instruction/clickOutside";
import YulangAddDom from "@/instruction/addDom";
import YulangDrag from "@/instruction/drag.js";

// 自定义指令对象
export const Directives = {
  YulangCopy,
  YulangLoading,
  YulangLongClick,
  YulangInfiniteScroll,
  YulangClickOutside,
  YulangAddDom,
  YulangDrag
};

// 自定义函数
import { Loading } from "@/createNode/loading";
import { Notification } from "@/createNode/notification";

// 自定义函数对象// 引入自定义方法(通知)
export const CreateNode = [
  { name: "$yulangLoading", value: Loading },
  { name: "$yulangNotification", value: Notification },
];

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
  YulangCheckboxGroup,
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
  YulangTimePicker,
  YulangTooltip,
  YulangConfirm,
  YulangDrawer,
  YulangCollapse,
  YulangCollapseItem,
  YulangSkeleton,
  YulangRate,
  YulangRadioGroup,
  YulangRadio,
  YulangContainer,
  YulangHeader,
  YulangAside,
  YulangMain,
  YulangFooter,
  YulangPagination,
  YulangTablePlus,
  YulangTablePlusColumn,
  YulangColorPicker,
  YulangTimeline,
  YulangTimelineItem,
  YulangDropdown,
  YulangDropdownMenu,
  YulangDropdownItem,
  YulangBreadcrumb,
  YulangBreadcrumbItem,
  YulangInputNumber,
  YulangOption
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
  Packages,
  Lib,
  Directives,
};
