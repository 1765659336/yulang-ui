<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 仅允许输入标准的数字值，可定义范围 </template>
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <input-number-b></input-number-b>
        <template #tip>
          要使用它，只需要在yulang-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值。
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      <yulang-describe-frame :codeStr="codeStrC">
        <input-number-c></input-number-c>
      </yulang-describe-frame>
    </template>
    <template #d>
      允许定义递增递减的步数控制
      <yulang-describe-frame :codeStr="codeStrD">
        <input-number-d></input-number-d>
        <template #tip> 设置step属性可以控制步长，接受一个Number。 </template>
      </yulang-describe-frame>
    </template>
    <template #e>
      <yulang-describe-frame :codeStr="codeStrE">
        <input-number-e></input-number-e>
        <template #tip>
          stepStrictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数。
        </template>
      </yulang-describe-frame>
    </template>
    <template #f>
      <yulang-describe-frame :codeStr="codeStrF">
        <input-number-f></input-number-f>
        <template #tip>
          设置 precision 属性可以控制数值精度，接收一个 Number。precision
          的值必须是一个非负整数，并且不能小于 step 的小数位数。
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import InputNumberB from "./components/InputNumberB.vue";
import InputNumberC from "./components/InputNumberC.vue";
import InputNumberD from "./components/InputNumberD.vue";
import InputNumberE from "./components/InputNumberE.vue";
import InputNumberF from "./components/InputNumberF.vue";
import { codeStrB, codeStrC, codeStrD, codeStrE, codeStrF } from "./data";

export default {
  components: {
    YulangAnchorPoint,
    YulangDescribeFrame,
    InputNumberB,
    InputNumberC,
    InputNumberD,
    InputNumberE,
    InputNumberF,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      codeStrF,
      slotArr: [
        { slotName: "a", slotTitle: "InputNumber 计数器", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "禁用状态", level: 2 },
        { slotName: "d", slotTitle: "步数", level: 2 },
        { slotName: "e", slotTitle: "严格步数", level: 2 },
        { slotName: "f", slotTitle: "精度", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
