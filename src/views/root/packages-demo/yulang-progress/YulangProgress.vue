<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 用于展示操作进度，告知用户当前状态和预期。 </template>
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <progress-b></progress-b>
        <template #tip>
          Progress
          组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在
          0-100。通过 format 属性来指定进度条文字内容。
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      百分比不占用额外控件，适用于文件上传等场景。
      <yulang-describe-frame :codeStr="codeStrC">
        <progress-c></progress-c>
        <template #tip>
          Progress 组件可通过 stroke-height 属性更改进度条的高度，并可通过
          text-inside 属性来将进度条描述置于进度条内部。
        </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      可以通过 color 设置进度条的颜色，color 可以接受颜色字符串，函数和数组。
      <yulang-describe-frame :codeStr="codeStrD">
        <progress-d></progress-d>
      </yulang-describe-frame>
    </template>
    <template #e>
      Progress 组件可通过 type
      属性来指定使用环形进度条，在环形进度条中，还可以通过 width
      属性来设置其大小。
      <yulang-describe-frame :codeStr="codeStrE">
        <progress-e></progress-e>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import ProgressB from "./components/ProgressB.vue";
import ProgressC from "./components/ProgressC.vue";
import ProgressD from "./components/ProgressD.vue";
import ProgressE from "./components/ProgressE.vue";

import { codeStrB, codeStrC, codeStrD, codeStrE } from "./data";
export default {
  name: "packages-yulang-progress",
  components: {
    ProgressB,
    ProgressC,
    ProgressD,
    ProgressE,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      slotArr: [
        { slotName: "a", slotTitle: "Progress 进度条", level: 1 },
        { slotName: "b", slotTitle: "线形进度条", level: 2 },
        { slotName: "c", slotTitle: "百分比内显", level: 2 },
        { slotName: "d", slotTitle: "自定义颜色", level: 2 },
        { slotName: "e", slotTitle: "环形进度条", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
