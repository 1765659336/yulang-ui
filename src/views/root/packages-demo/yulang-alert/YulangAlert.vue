<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 用于页面中展示重要的提示信息。 </template>
    <template #b>
      页面中的非浮层元素，不会自动消失。
      <yulang-describe-frame :codeStr="codeStrB">
        <alert-b></alert-b>
        <template #tip>
          Alert 组件提供四种主题，由type属性指定，默认值为info。
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      Alert 组件提供了两个不同的主题：light和dark。
      <yulang-describe-frame :codeStr="codeStrC">
        <alert-c></alert-c>
        <template #tip> 通过设置effect属性来改变主题，默认为light。 </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      自定义关闭按钮为文字或其他符号。
      <yulang-describe-frame :codeStr="codeStrD">
        <alert-d></alert-d>
        <template #tip
          >在 Alert
          组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。
          closable属性决定是否可关闭，接受boolean，默认为true。你可以设置close-text属性来代替右侧的关闭图标，注意：close-text必须为文本。设置close事件来设置关闭时的回调。</template
        >
      </yulang-describe-frame>
    </template>
    <template #e>
      表示某种状态时提升可读性。
      <yulang-describe-frame :codeStr="codeStrE">
        <alert-e></alert-e>
      </yulang-describe-frame>
    </template>
    <template #f>
      表示某种状态时提升可读性。
      <yulang-describe-frame :codeStr="codeStrF">
        <alert-f></alert-f>
      </yulang-describe-frame>
    </template>
    <template #g>
      包含标题和内容，解释更详细的警告。
      <yulang-describe-frame :codeStr="codeStrG">
        <alert-g></alert-g>
        <template #tip>
          除了必填的title属性外，你可以设置description属性来帮助你更好地介绍，我们称之为辅助性文字。
          辅助性文字只能存放单行文本，会自动换行显示。
        </template>
      </yulang-describe-frame>
    </template>
    <template #h>
      <yulang-describe-frame :codeStr="codeStrH">
        <alert-h></alert-h>
        <template #tip>
          最后，这是一个同时具有 icon 和辅助性文字的样例。
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import AlertB from "./components/AlertB.vue";
import AlertC from "./components/AlertC.vue";
import AlertD from "./components/AlertD.vue";
import AlertE from "./components/AlertE.vue";
import AlertF from "./components/AlertF.vue";
import AlertG from "./components/AlertG.vue";
import AlertH from "./components/AlertH.vue";

import {
  codeStrB,
  codeStrC,
  codeStrD,
  codeStrE,
  codeStrF,
  codeStrG,
  codeStrH,
} from "./data";

export default {
  components: {
    AlertB,
    AlertC,
    AlertD,
    AlertE,
    AlertF,
    AlertG,
    AlertH,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      codeStrF,
      codeStrG,
      codeStrH,
      slotArr: [
        { slotName: "a", slotTitle: "Alert 警告", level: 1 },
        { slotName: "b", slotTitle: "基本用法", level: 2 },
        { slotName: "c", slotTitle: "主题", level: 2 },
        { slotName: "d", slotTitle: "自定义关闭按钮", level: 2 },
        { slotName: "e", slotTitle: "带有 icon", level: 2 },
        { slotName: "f", slotTitle: "不可关闭", level: 2 },
        { slotName: "g", slotTitle: "带有辅助性文字介绍", level: 2 },
        { slotName: "h", slotTitle: "带有 icon 和辅助性文字介绍", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
