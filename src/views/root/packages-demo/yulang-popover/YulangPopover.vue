<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <popover-b></popover-b>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import PopoverB from "./components/PopoverB.vue";
import { codeStrB } from "./data.js";
export default {
  name: "packages-demo-yulang-popover",
  components: {
    PopoverB,
  },
  data() {
    return {
      codeStrB,
      slotArr: [
        { slotName: "a", slotTitle: "Popover 弹出框", level: 1 },
        { slotName: "b", slotTitle: "基本用法", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
