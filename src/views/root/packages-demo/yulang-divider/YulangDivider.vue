<template>
  <div>
    <yulang-anchor-point :slotArr="slotArr">
      <template #a> 区隔内容的分割线。 </template>
      <template #b>
        对不同章节的文本段落进行分割。
        <yulang-describe-frame :codeStr="codeStrB">
          <divider-b></divider-b>
        </yulang-describe-frame>
      </template>
      <template #c>
        可以在分割线上自定义文案内容。
        <yulang-describe-frame :codeStr="codeStrC">
          <divider-c></divider-c>
        </yulang-describe-frame>
      </template>
      <template #d>
        <yulang-describe-frame :codeStr="codeStrD">
          <divider-d></divider-d>
        </yulang-describe-frame>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStrB, codeStrC, codeStrD } from "./data.js";
import DividerB from "./components/DividerB.vue";
import DividerC from "./components/DividerC.vue";
import DividerD from "./components/DividerD.vue";

export default {
  name: "packages-demo-yulang-divider",
  components: {
    DividerB,
    DividerC,
    DividerD,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      slotArr: [
        { slotName: "a", slotTitle: "Divider 分割线", level: 1 },
        { slotName: "b", slotTitle: "基本用法", level: 2 },
        { slotName: "c", slotTitle: "设置文案", level: 2 },
        { slotName: "d", slotTitle: "垂直分割", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
