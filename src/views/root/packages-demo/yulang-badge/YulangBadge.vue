<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 出现在按钮、图标旁的数字或状态标记。 </template>
    <template #b>
      展示新消息数量。
      <yulang-describe-frame :codeStr="codeStrB">
        <badge-b></badge-b>
        <template #tip> 定义value属性，它接受Number或者String。 </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      可自定义最大值。
      <yulang-describe-frame :codeStr="codeStrC">
        <badge-c></badge-c>
        <template #tip
          >由max属性定义，它接受一个Number，需要注意的是，只有当value为Number时，它才会生效。</template
        >
      </yulang-describe-frame>
    </template>
    <template #d>
      可以显示数字以外的文本内容。
      <yulang-describe-frame :codeStr="codeStrD">
        <badge-d></badge-d>
        <template #tip
          >定义value为String类型是时可以用于显示自定义文本。</template
        >
      </yulang-describe-frame>
    </template>
    <template #e>
      以红点的形式标注需要关注的内容。
      <yulang-describe-frame :codeStr="codeStrE">
        <badge-e></badge-e>
        <template #tip
          >除了数字外，设置is-dot属性，它接受一个Boolean。
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import BadgeB from "./components/BadgeB.vue";
import BadgeC from "./components/BadgeC.vue";
import BadgeD from "./components/BadgeD.vue";
import BadgeE from "./components/BadgeE.vue";

import { codeStrB, codeStrC, codeStrD, codeStrE } from "./data";

export default {
  name: "packages-demo-yulang-badge",
  components: {
    BadgeB,
    BadgeC,
    BadgeD,
    BadgeE,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      slotArr: [
        { slotName: "a", slotTitle: "Badge 标记", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "最大值", level: 2 },
        { slotName: "d", slotTitle: "自定义内容", level: 2 },
        { slotName: "e", slotTitle: "小红点", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
