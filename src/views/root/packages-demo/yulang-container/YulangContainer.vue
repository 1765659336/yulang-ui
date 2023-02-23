<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
      用于布局的容器组件，方便快速搭建页面的基本结构：
      yulang-container：外层容器。当子元素中包含 yulang-header 或 yulang-footer
      时，全部子元素会垂直上下排列，否则会水平左右排列。
      yulang-header：顶栏容器。 yulang-aside：侧边栏容器。
      yulang-main：主要区域容器。 yulang-footer：底栏容器。
    </template>
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <container-b></container-b>
        <template #tip>
          以上组件采用了 flex
          布局，使用前请确定目标浏览器是否兼容。此外，yulang-container
          的子元素只能是后四者，后四者的父元素也只能是 yulang-container。
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import ContainerB from "./components/ContainerB.vue";
import { codeStrB } from "./data";
export default {
  name: "packages-demo-yulang-container",
  components: { YulangAnchorPoint, YulangDescribeFrame, ContainerB },
  data() {
    return {
      codeStrB,
      slotArr: [
        { slotName: "a", slotTitle: "Container 布局容器", level: 1 },
        { slotName: "b", slotTitle: "常见页面布局", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
