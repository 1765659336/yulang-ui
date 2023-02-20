<template>
  <yulang-anchor-point v-model="slotArr">
    <template #a> 用于选择或输入时间 </template>
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <time-picker-b></time-picker-b>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import TimePickerB from "./components/TimePickerB.vue";
import { codeStrB } from "./data";
export default {
  name: "packages-demo-yulang-time-picker",
  components: {
    TimePickerB,
  },
  data() {
    return {
      codeStrB,
      slotArr: [
        { slotName: "a", slotTitle: "TimePicker 时间选择器", level: 1 },
        { slotName: "b", slotTitle: "固定时间点", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
