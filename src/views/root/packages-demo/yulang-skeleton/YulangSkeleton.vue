<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
      在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading
      的视觉效果更好。
    </template>
    <template #b>
      基础的骨架效果。
      <yulang-describe-frame :codeStr="codeStrB">
        <skeleton-b></skeleton-b>
        <template #tip>
          fatherDomSelect属性设置要盖住的父盒子，skeletonArr属性设置要显示骨架屏的子盒子
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import SkeletonB from "./components/SkeletonB.vue";
import { codeStrB } from "./data";

export default {
  components: { YulangAnchorPoint, YulangDescribeFrame, SkeletonB },
  name: "packages-demo-yulang-skeleton",
  data() {
    return {
      codeStrB,
      slotArr: [
        { slotName: "a", slotTitle: "Skeleton 骨架屏", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "c", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
