<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 通过折叠面板收纳内容区域 </template>
    <template #b>
      可同时展开多个面板，面板之间不影响
      <yulang-describe-frame :codeStr="codeStrB">
        <collapse-b></collapse-b>
      </yulang-describe-frame>
    </template>
    <template #c>
      每次只能展开一个面板
      <yulang-describe-frame :codeStr="codeStrC">
        <collapse-c></collapse-c>
        <template #tip>
          通过 accordion 属性来设置是否以手风琴模式显示。
        </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      除了可以通过 title 属性以外，还可以通过具名 slot
      来实现自定义面板的标题内容，以实现增加图标等效果。
      <yulang-describe-frame :codeStr="codeStrD">
        <collapse-d></collapse-d>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import CollapseB from "./components/CollapseB.vue";
import CollapseC from "./components/CollapseC.vue";
import CollapseD from "./components/CollapseD.vue";
import { codeStrB, codeStrC, codeStrD } from "./data";
export default {
  name: "packages-yulang-collapse",
  components: { CollapseB, CollapseC, CollapseD, YulangDescribeFrame },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      slotArr: [
        { slotName: "a", slotTitle: "Collapse 折叠面板", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "手风琴效果", level: 2 },
        { slotName: "d", slotTitle: "自定义面板标题", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
