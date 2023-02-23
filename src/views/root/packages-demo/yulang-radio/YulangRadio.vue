<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <radio-b></radio-b>
      </yulang-describe-frame>
    </template>
    <template #c>
      <yulang-describe-frame :codeStr="codeStrC">
        <radio-c></radio-c>
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
        { slotName: "a", slotTitle: "a", level: 1 },
        { slotName: "b", slotTitle: "b", level: 2 },
        { slotName: "c", slotTitle: "c", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
