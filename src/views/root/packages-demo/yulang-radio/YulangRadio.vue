<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 在一组备选项中进行单选 </template>
    <template #b>
      单选框不应该有太多的可选项，
      如果你有很多的可选项你应该使用选择框而不是单选框。
      <yulang-describe-frame :codeStr="codeStrB">
        <radio-b></radio-b>
        <template #tip>
          要使用 Radio 组件，只需要设置v-model绑定变量，
          选中意味着变量的值为相应 Radio label属性的值
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      disabled 属性可以用来控制单选框的禁用状态。
      <yulang-describe-frame :codeStr="codeStrC">
        <radio-c></radio-c>
        <template #tip>
          你只需要为单选框设置 disabled 属性就能控制其禁用状态。
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import RadioB from "./components/RadioB.vue";
import RadioC from "./components/RadioC.vue";
import { codeStrB, codeStrC } from "./data";
export default {
  components: { YulangAnchorPoint, YulangDescribeFrame, RadioB, RadioC },
  data() {
    return {
      codeStrB,
      codeStrC,
      slotArr: [
        { slotName: "a", slotTitle: "Radio 单选框", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "禁用状态", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
