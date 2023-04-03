<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 加载数据时显示动效。 </template>
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <loading-b></loading-b>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import LoadingB from "./components/LoadingB.vue";
import { codeStrB } from "./data";

export default {
  name: "packages-demo-yulang-loading",
  components: {
    LoadingB,
  },
  data() {
    return {
      codeStrB,
      slotArr: [
        { slotName: "a", slotTitle: "Loading 加载", level: 1 },
        { slotName: "b", slotTitle: "区域加载", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
