<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
      常用于主动操作后的反馈提示。与 Notification
      的区别是后者更多用于系统级通知的被动提醒。
    </template>
    <template #b>
      从顶部出现，不会自动消失
      <yulang-describe-frame :codeStr="codeStrB">
        <message-b></message-b>
        <template #tip>
          Element 注册了一个$message方法用于调用，Message
          可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      用来显示「默认、成功、警告、消息、错误」类的操作反馈。
      <yulang-describe-frame :codeStr="codeStrC">
        <message-c></message-c>
        <template #tip>
          当需要自定义更多属性时，Message也可以接收一个对象为参数。
          比如，设置type字段可以定义不同的状态，默认为info。
          此时正文内容以message的值传入。同时，我们也为 Message 的各种 type
          注册了方法，可以在不传入type字段的情况下像open4那样直接调用。
        </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      设置会默认消失
      <yulang-describe-frame :codeStr="codeStrD">
        <message-d></message-d>
        <template #tip>
          通过传入的delay来设置多久之后自动消失，默认3000毫秒
        </template>
      </yulang-describe-frame>
    </template>
    <template #e>
      Message消息提示支持在屏幕左边，中间，右边三个位置弹出
      <yulang-describe-frame :codeStr="codeStrE">
        <message-e></message-e>
        <template #tip>
          通过传入的option来设置弹出位置，默认值为center，中间弹出
        </template>
      </yulang-describe-frame>
    </template>
    <template #f>
      可手动开启可关闭功能，此时message会带上一个关闭的icon，点击可直接关闭message
      <yulang-describe-frame :codeStr="codeStrF">
        <message-f></message-f>
        <template #tip>
          通过传入的close为true/false，默认值为false，控制是否可手动关闭
        </template>
      </yulang-describe-frame>
    </template>
    <template #g>
      YulangUI 为 Vue.prototype 添加了全局方法 $yulangMessage。因此在 vue
      instance 中可以采用本页面中的方式调用 Message。
    </template>
    <template #h>
      单独引入 YulangMessage
      <yulang-describe-frame codeStr="codeStrH">
        <message-h></message-h>
        <template #tip>
          此时调用方法为 YulangMessage(options)。我们也为每个 type
          定义了各自的方法，如 YulangMessage.success(options)。并且可以调用
          YulangMessage.closeAll() 手动关闭所有实例。
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import MessageB from "./components/MessageB.vue";
import MessageC from "./components/MessageC.vue";
import MessageD from "./components/MessageD.vue";
import MessageE from "./components/MessageE.vue";
import MessageF from "./components/MessageF.vue";
import MessageH from "./components/MessageH.vue";

import {
  codeStrB,
  codeStrC,
  codeStrD,
  codeStrE,
  codeStrF,
  codeStrH,
} from "./data";

export default {
  name: "packages-demo-yulang-message",
  components: {
    MessageB,
    MessageC,
    MessageD,
    MessageE,
    MessageF,
    MessageH
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      codeStrF,
      codeStrH,
      slotArr: [
        { slotName: "a", slotTitle: "Message 消息提示", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "不同状态", level: 2 },
        { slotName: "d", slotTitle: "自动关闭", level: 2 },
        { slotName: "e", slotTitle: "弹出位置", level: 2 },
        { slotName: "f", slotTitle: "可关闭", level: 2 },
        { slotName: "g", slotTitle: "全局方法", level: 2 },
        { slotName: "h", slotTitle: "单独引用", level: 2 },
      ],
    };
  },
  methods: {
    btn() {
      this.$yulangMessage({
        message: "哈哈哈",
        type: "success",
        delay: 3000,
      });
      this.$yulangMessage({
        message: "哈哈哈",
        type: "success",
        delay: 3000,
        position: "left",
      });
      this.$yulangMessage({
        message: "哈哈哈",
        type: "success",
        delay: 3000,
        position: "left",
        vNode: this.$createElement("span", "vNode"),
      });
      this.$yulangMessage({
        message: "哈哈哈",
        type: "success",
        delay: 3000,
        position: "left",
        vNode: this.$createElement("span", "vNode"),
        close: true,
      });
    },
  },
};
</script>

<style lang="less" scoped></style>
