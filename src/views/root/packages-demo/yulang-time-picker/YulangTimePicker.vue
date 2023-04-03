<template>
  <yulang-anchor-point v-model="slotArr">
    <template #a> 用于选择或输入时间 </template>
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <time-picker-b></time-picker-b>
      </yulang-describe-frame>
    </template>
    <template #c>
      可以选择任意时间
      <yulang-describe-frame :codeStr="codeStrC">
        <time-picker-c></time-picker-c>
        <template #tip>
          使用 el-time-picker 标签，通过selectableRange限制可选时间范围
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import TimePickerB from "./components/TimePickerB.vue";
import TimePickerC from "./components/TimePickerC.vue";

import { codeStrB, codeStrC } from "./data";
export default {
  name: "packages-demo-yulang-time-picker",
  components: {
    TimePickerB,
    TimePickerC,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      slotArr: [
        { slotName: "a", slotTitle: "TimePicker 时间选择器", level: 1 },
        { slotName: "b", slotTitle: "固定时间点", level: 2 },
        // { slotName: "c", slotTitle: "任意时间点", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
