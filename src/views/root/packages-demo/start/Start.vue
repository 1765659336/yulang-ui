<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #b>
      你可以引入整个
      YulangUI，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 YulangUI。
    </template>
    <template #c>
      <yulang-describe-frame :codeStr="codeStrC">
        在 main.js 中写入以下内容：需要注意的是，样式文件需要单独引入。
      </yulang-describe-frame>
    </template>
    <!-- <template #d>
      <yulang-describe-frame codeStr="">
        工程化还未接触，不会
      </yulang-describe-frame>
    </template> -->
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint";
import { codeStrC } from "./data";
export default {
  name: "packages-demo-start",
  components: {
    YulangAnchorPoint,
  },
  data() {
    return {
      codeStrC,
      slotArr: [
        { slotName: "a", slotTitle: "快速开始", level: 1 },
        { slotName: "b", slotTitle: "引入 Element", level: 2 },
        { slotName: "c", slotTitle: "完整引入", level: 3 },
        // { slotName: "d", slotTitle: "按需加载", level: 3 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
