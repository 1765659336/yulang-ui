<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>点击元素，弹出气泡确认框。</template>
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <confirm-b></confirm-b>
        <template #tip>在confirm 中，使用title 属性设置提示内容</template>
      </yulang-describe-frame>
    </template>
    <template #c>
      <yulang-describe-frame :codeStr="codeStrC">
        <confirm-c></confirm-c>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import ConfirmB from "./components/ConfirmB.vue";
import ConfirmC from "./components/ConfirmC.vue";
import { codeStrB, codeStrC } from "./data";
export default {
  name: "packages-demo-yulang-confirm",
  components: {
    ConfirmB,
    ConfirmC,
    YulangDescribeFrame,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      slotArr: [
        { slotName: "a", slotTitle: "confirm 气泡确认框", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "自定义", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
