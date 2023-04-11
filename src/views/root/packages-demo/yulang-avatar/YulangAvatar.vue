<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 用图标、图片或者字符的形式展示用户或事物信息。 </template>
    <template #b>
      通过 shape 和 size 设置头像的形状和大小。
      <yulang-describe-frame :codeStr="codeStrB">
        <avatar-b></avatar-b>
      </yulang-describe-frame>
    </template>
    <template #c>
      支持三种类型：图标、图片和字符
      <yulang-describe-frame :codeStr="codeStrC">
        <avatar-c></avatar-c>
        <template #tip>
          src属性优先级高于icon属性,icon属性优先级高于默认插槽，
          当它们同时存在时，按照优先级的顺序显示
        </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      当展示类型为图片的时候，图片加载失败的 fallback 行为
      <yulang-describe-frame :codeStr="codeStrD">
        <avatar-d></avatar-d>
      </yulang-describe-frame>
    </template>
    <template #e>
      当展示类型为图片的时候，使用 fit 属性定义图片如何适应容器框，同原生
      <yulang-link
        url="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
        >object-fit</yulang-link
      >
      <yulang-describe-frame :codeStr="codeStrE">
        <avatar-e></avatar-e>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import AvatarB from "./components/AvatarB.vue";
import AvatarC from "./components/AvatarC.vue";
import AvatarD from "./components/AvatarD.vue";
import AvatarE from "./components/AvatarE.vue";

import { codeStrB, codeStrC, codeStrD,codeStrE } from "./data";

export default {
  name: "packages-demo-yulang-avatar",
  components: {
    AvatarB,
    AvatarC,
    AvatarD,
    AvatarE,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      slotArr: [
        { slotName: "a", slotTitle: "Avatar 头像", level: 1 },
        { slotName: "b", slotTitle: "基本用法", level: 2 },
        { slotName: "c", slotTitle: "展示类型", level: 2 },
        { slotName: "d", slotTitle: "图片加载失败的 fallback 行为", level: 2 },
        { slotName: "e", slotTitle: "图片如何适应容器框", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
