<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
      由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据
    </template>
    <template #b>
      包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。
      <yulang-describe-frame :codeStr="codeStrB">
        <form-b></form-b>
        <template #tip>
          在 Form 组件中，每一个表单域由一个 Form-Item
          组件构成，表单域中可以放置各种类型的表单控件，包括
          Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      根据具体目标和制约因素，选择最佳的标签对齐方式。
      <yulang-describe-frame :codeStr="codeStrC">
        <form-c></form-c>
        <template #tip>
          通过设置 label-position 属性可以改变表单域标签的位置，可选值为
          top、left，当设为 top 时标签会置于表单域的顶部
        </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。
      <yulang-describe-frame :codeStr="codeStrD">
        <form-d></form-d>
        <template #tip>
          Form 组件提供了表单验证的功能，只需要通过 rules
          属性传入约定的验证规则，并将 Form-Item 的 prop
          属性设置为需校验的字段名即可。校验规则参见
          <yulang-link
            mainColor="var(--yulang-theme-color--)"
            url="https://github.com/yiminghe/async-validator"
            target="_blank"
            >async-validator</yulang-link
          >
        </template>
      </yulang-describe-frame>
    </template>
    <template #e>
      这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。
      <yulang-describe-frame :codeStr="codeStrE">
        <form-e></form-e>
        <template #tip>
          自定义校验 callback 必须被调用。 更多高级用法可参考
          <yulang-link
            mainColor="var(--yulang-theme-color--)"
            url="https://github.com/yiminghe/async-validator"
            target="_blank"
            >async-validator</yulang-link
          >
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import YulangLink from "@/packages/yulang-link/YulangLink.vue";
import FormB from "./components/FormB.vue";
import FormC from "./components/FormC.vue";
import FormD from "./components/FormD.vue";
import FormE from "./components/FormE.vue";
import { codeStrB, codeStrC, codeStrD, codeStrE } from "./data";

export default {
  name: "packages-demo-yulang-form",
  components: {
    YulangAnchorPoint,
    YulangDescribeFrame,
    YulangLink,
    FormB,
    FormC,
    FormD,
    FormE,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      slotArr: [
        { slotName: "a", slotTitle: "Form 表单", level: 1 },
        { slotName: "b", slotTitle: "典型表单", level: 2 },
        { slotName: "c", slotTitle: "对齐方式", level: 2 },
        { slotName: "d", slotTitle: "表单验证", level: 2 },
        { slotName: "e", slotTitle: "自定义校验规则", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
