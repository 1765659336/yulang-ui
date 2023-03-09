<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 可视化地呈现时间流信息。 </template>
    <template #b>
      Timeline 可拆分成多个按照时间戳正序或倒序排列的
      activity，时间戳是其区分于其他控件的重要特征，使⽤时注意与 Steps
      步骤条等区分。
      <yulang-describe-frame :codeStr="codeStrB">
        <timeline-b></timeline-b>
      </yulang-describe-frame>
    </template>
    <template #c>
      可根据实际场景⾃定义节点、时间、内容区样式
      <yulang-describe-frame :codeStr="codeStrC">
        <timeline-c></timeline-c>
      </yulang-describe-frame>
    </template>
    <template #d>
      当内容在垂直⽅向上过⾼时，可将时间戳置于内容之上。
      <yulang-describe-frame :codeStr="codeStrD">
        <timeline-d></timeline-d>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import TimelineB from "./components/TimelineB.vue";
import TimelineC from "./components/TimelineC.vue";
import TimelineD from "./components/TimelineD.vue";
import { codeStrB, codeStrC, codeStrD } from "./data.js";
export default {
  name: "packages-demo-yulang-timeline",
  components: {
    TimelineB,
    TimelineC,
    TimelineD,
    YulangAnchorPoint,
    YulangDescribeFrame,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      slotArr: [
        { slotName: "a", slotTitle: "Timeline 时间线", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "自定义节点、时间与内容区", level: 2 },
        { slotName: "d", slotTitle: "⾃定义时间戳位置", level: 2 },
      ],
    };
  },
};
</script>

<style YulangAnchorPointlang="less" scoped></style>
