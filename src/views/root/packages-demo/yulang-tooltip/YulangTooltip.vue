<template>
  <yulang-anchor-point v-model="slotArr">
    <template #a> 常用于展示鼠标 hover 时的提示信息。 </template>
    <template #b>
      在这里我们提供 9
      种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。
      <yulang-describe-frame :codeStr="codeStrB">
        <tooltip-b></tooltip-b>
        <template #tip>
          使用content属性来决定hover时的提示信息。由placement属性决定展示效果：placement属性值为：方向-对齐位置；四个方向：top、left、right、bottom；三种对齐位置：start,
          end，默认为bottom。如placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      Tooltip 组件提供了两个不同的主题：dark和light。
      <yulang-describe-frame :codeStr="codeStrC">
        <tooltip-c></tooltip-c>
        <template #tip> 通过设置effect属性来改变主题，默认为dark。 </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      展示多行文本或者是设置文本内容的格式
      <yulang-describe-frame :codeStr="codeStrC">
        <tooltip-d></tooltip-d>
        <template #tip>
          用具名 slot 分发content，替代tooltip中的content属性。</template
        >
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import TooltipB from "./components/TooltipB.vue";
import TooltipC from "./components/TooltipC.vue";
import TooltipD from "./components/TooltipD.vue";
import { codeStrB, codeStrC, codeStrD } from "./data";
export default {
  name: "packages-demo-yulang-tooltip",
  components: {
    TooltipB,
    TooltipC,
    TooltipD,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      slotArr: [
        { slotName: "a", slotTitle: "Tooltip 文字提示", level: 1 },
        { slotName: "b", slotTitle: "基本用法", level: 2 },
        { slotName: "c", slotTitle: "主题", level: 2 },
        { slotName: "d", slotTitle: "更多 Content", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
