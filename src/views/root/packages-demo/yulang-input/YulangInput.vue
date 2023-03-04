<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <input-b></input-b>
      </yulang-describe-frame>
    </template>
    <template #c>
      <yulang-describe-frame :codeStr="codeStrC">
        <input-c></input-c>
        <template #tip> 通过 disabled 属性指定是否禁用 input 组件 </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      <yulang-describe-frame :codeStr="codeStrD">
        <input-d></input-d>
        <template #tip> 使用clearable属性即可得到一个可清空的输入框 </template>
      </yulang-describe-frame>
    </template>
    <template #e>
      <yulang-describe-frame :codeStr="codeStrE">
        <input-e></input-e>
        <template #tip>
          使用showPassword属性即可得到一个可切换显示隐藏的密码框
        </template>
      </yulang-describe-frame>
    </template>
    <template #f>
      带有图标标记输入类型
      <yulang-describe-frame :codeStr="codeStrF">
        <input-f></input-f>
        <template #tip>
          可以通过 prefixIcon 和 suffixIcon 属性在 input
          组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。
        </template>
      </yulang-describe-frame>
    </template>
    <template #g>
      用于输入多行文本信息，通过将 type 属性的值指定为 textarea。
      <yulang-describe-frame :codeStr="codeStrG">
        <input-g></input-g>
        <template #tip> 文本域高度可通过 rows 属性控制 </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import InputB from "./components/InputB.vue";
import InputC from "./components/InputC.vue";
import InputD from "./components/InputD.vue";
import InputE from "./components/InputE.vue";
import InputF from "./components/InputF.vue";
import InputG from "./components/InputG.vue";

import {
  codeStrB,
  codeStrC,
  codeStrD,
  codeStrE,
  codeStrF,
  codeStrG,
} from "./data.js";
export default {
  name: "package-demos-yulang-input",
  components: {
    InputB,
    InputC,
    InputD,
    InputE,
    InputF,
    InputG,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      codeStrF,
      codeStrG,
      slotArr: [
        { slotName: "a", slotTitle: "Input 输入框", level: 1 },
        { slotName: "b", slotTitle: "基本用法", level: 2 },
        { slotName: "c", slotTitle: "禁用状态", level: 2 },
        { slotName: "d", slotTitle: "可清空", level: 2 },
        { slotName: "e", slotTitle: "密码框", level: 2 },
        { slotName: "f", slotTitle: "带 icon 的输入框", level: 2 },
        { slotName: "g", slotTitle: "文本域", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
