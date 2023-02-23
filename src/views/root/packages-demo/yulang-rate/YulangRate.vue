<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 用于评分 </template>
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <rate-b></rate-b>
        <template #tip>
          通过 rateItemNumber 设置评分等级最大值，默认值为1
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      使用插槽来替换原本的dom
      <yulang-describe-frame :codeStr="codeStrC">
        <rate-c></rate-c>
        <template #tip>
          插槽名采用rateItem + index的形式,index从0开始
        </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      用辅助文字直接地表达对应分数
      <yulang-describe-frame :codeStr="codeStrD">
        <rate-d></rate-d>
        <template #tip>
          为组件设置 showText 属性会在右侧显示辅助文字。 通过设置 texts
          可以为每一个分值指定对应的辅助文字。 texts
          为一个数组，长度应等于最大值 max。
        </template>
      </yulang-describe-frame>
    </template>
    <template #e>
      当你再次点击相同的值时，可以将值重置为 0。
      <yulang-describe-frame :codeStr="codeStrE">
        <rate-e></rate-e>
      </yulang-describe-frame>
    </template>
    <template #f>
      只读的评分用来展示分数
      <yulang-describe-frame :codeStr="codeStrF">
        <rate-f></rate-f>
        <template #tip>
          为组件设置 disabled 属性表示组件为只读。 此时若设置
          showScore，则会在右侧显示目前的分值。 此外，您可以使用属性
          scoreTemplate 来提供评分模板。 模板为一个包含了 {value}
          的字符串，{value} 会被替换为当前分值。
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import RateB from "./components/RateB.vue";
import RateC from "./components/RateC.vue";
import RateD from "./components/RateD.vue";
import RateE from "./components/RateE.vue";
import RateF from "./components/RateF.vue";
import { codeStrB, codeStrC, codeStrD, codeStrE, codeStrF } from "./data";

export default {
  name: "packages-demo-yulang-rate",
  components: {
    YulangAnchorPoint,
    YulangDescribeFrame,
    RateB,
    RateC,
    RateD,
    RateE,
    RateF,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      codeStrF,
      slotArr: [
        { slotName: "a", slotTitle: "Rate 评分", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "自定义评分显示", level: 2 },
        { slotName: "d", slotTitle: "辅助文字", level: 2 },
        { slotName: "e", slotTitle: "可清空", level: 2 },
        { slotName: "f", slotTitle: "只读", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
