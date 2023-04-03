<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #b>
      <yulang-alert
        title="width属性只能控制content内容的宽度,不能控制插槽宽度"
        type="warning"
      ></yulang-alert>
      <yulang-describe-frame :codeStr="codeStrB">
        <popover-b></popover-b>
      </yulang-describe-frame>
    </template>
    <template #c>
      <yulang-describe-frame :codeStr="codeStrB">
        <popover-c></popover-c>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import PopoverB from './components/PopoverB.vue';
import PopoverC from './components/PopoverC.vue';
import { codeStrB, codeStrC } from './data.js';
export default {
  name: 'packages-demo-yulang-popover',
  components: {
    PopoverB,
    PopoverC,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      slotArr: [
        { slotName: 'a', slotTitle: 'Popover 弹出框', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '内容区插槽', level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
