<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 显示当前页面的路径，快速返回之前的任意页面。 </template>
    <template #b>
      适用广泛的基础用法。
      <yulang-describe-frame :codeStr="codeStrB">
        <breadcrumb-b></breadcrumb-b>
      </yulang-describe-frame>
    </template>
    <template #c>
      适用广泛的基础用法。
      <yulang-describe-frame :codeStr="codeStrC">
        <breadcrumb-c></breadcrumb-c>
        <template #tip>
          通过设置 separatorClass 可使用相应的 iconfont 作为分隔符，注意这将使
          separator 设置失效
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import BreadcrumbB from "./components/BreadcrumbB.vue";
import BreadcrumbC from "./components/BreadcrumbC.vue";
import { codeStrB, codeStrC } from "./data";

export default {
  name: "yulang-breadcrumb",
  components: {
    YulangAnchorPoint,
    YulangDescribeFrame,
    BreadcrumbB,
    BreadcrumbC,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      slotArr: [
        { slotName: "a", slotTitle: "Breadcrumb 面包屑", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "图标分隔符", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
