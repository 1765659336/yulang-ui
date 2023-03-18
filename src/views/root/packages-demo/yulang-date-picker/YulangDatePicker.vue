<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 用于选择或输入日期 </template>
    <template #b>
      以「日」为基本单位，基础的日期选择控件
      <yulang-describe-frame :codeStr="codeStrB">
        <date-picker-b></date-picker-b>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import DatePickerB from "./components/DatePickerB.vue";
import { codeStrB } from "./data";

export default {
  name: "packages-demo-yulang-datepicker",
  components:{
    DatePickerB
  },
  data() {
    return {
      codeStrB,
      slotArr: [
        { slotName: "a", slotTitle: "DatePicker 日期选择器", level: 1 },
        { slotName: "b", slotTitle: "选择日", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
