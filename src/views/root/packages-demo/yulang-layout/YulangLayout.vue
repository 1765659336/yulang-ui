<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 通过基础的 24 分栏，迅速简便地创建布局。 </template>
    <template #b>
      使用单一分栏创建基础的栅格布局。
      <yulang-describe-frame :codeStr="codeStrB">
        <layout-b></layout-b>
        <template #tip>
          通过 row 和 col 组件，并通过 col 组件的 span
          属性我们就可以自由地组合布局。
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      分栏之间存在间隔。
      <yulang-describe-frame :codeStr="codeStrB">
        <layout-c></layout-c>
        <template #tip>
          Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。
        </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。
      <yulang-describe-frame :codeStr="codeStrD">
        <layout-d></layout-d>
      </yulang-describe-frame>
    </template>
    <template #e>
      支持偏移指定的栏数。
      <yulang-describe-frame :codeStr="codeStrE">
        <layout-e></layout-e>
        <template #tip>
          通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。
        </template>
      </yulang-describe-frame>
    </template>
    <template #f>
      通过 flex 布局来对分栏进行灵活的对齐。
      <yulang-describe-frame :codeStr="codeStrF">
        <layout-f></layout-f>
        <template #tip>
          将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify
          属性来指定 start, center, end, space-between, space-around
          其中的值来定义子元素的排版方式。
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import LayoutB from "./components/LayoutB.vue";
import LayoutC from "./components/LayoutC.vue";
import LayoutD from "./components/LayoutD.vue";
import LayoutE from "./components/LayoutE.vue";
import LayoutF from "./components/LayoutF.vue";

import { codeStrB, codeStrC, codeStrD, codeStrE, codeStrF } from "./data";

export default {
  name: "packages-demo-yulang-layout",
  components: {
    LayoutB,
    LayoutC,
    LayoutD,
    LayoutE,
    LayoutF,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      codeStrF,
      slotArr: [
        { slotName: "a", slotTitle: "Layout 布局", level: 1 },
        { slotName: "b", slotTitle: "基础布局", level: 2 },
        { slotName: "c", slotTitle: "分栏间隔", level: 2 },
        { slotName: "d", slotTitle: "混合布局", level: 2 },
        { slotName: "e", slotTitle: "分栏偏移", level: 2 },
        { slotName: "f", slotTitle: "对齐方式", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
