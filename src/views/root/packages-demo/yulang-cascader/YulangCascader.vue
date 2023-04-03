<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
      当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。
    </template>
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <cascader-b></cascader-b>
      </yulang-describe-frame>
    </template>
    <template #c>
      通过在数据源中设置 disabled 字段来声明该选项是禁用的
      <yulang-describe-frame :codeStr="codeStrC">
        <cascader-c></cascader-c>
      </yulang-describe-frame>
    </template>
    <template #d>
      通过 clearable 设置输入框可清空
      <yulang-describe-frame :codeStr="codeStrD">
        <cascader-d></cascader-d>
      </yulang-describe-frame>
    </template>
    <template #e>
      可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。
      <yulang-describe-frame :codeStr="codeStrE">
        <cascader-e></cascader-e>
        <template #tip>
          属性show-all-levels定义了是否显示完整的路径，将其赋值为false则仅显示最后一级
        </template>
      </yulang-describe-frame>
    </template>
    <template #f>
      可通过 props.multiple = true 来开启多选模式
      <yulang-describe-frame :codeStr="codeStrF">
        <cascader-f></cascader-f>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import CascaderB from "./components/CascaderB.vue";
import CascaderC from "./components/CascaderC.vue";
import CascaderD from "./components/CascaderD.vue";
import CascaderE from "./components/CascaderE.vue";
import CascaderF from "./components/CascaderF.vue";

import { codeStrB, codeStrC, codeStrD, codeStrE, codeStrF } from "./data";
export default {
  components: { CascaderB, CascaderC, CascaderD, CascaderE, CascaderF },
  name: "packages-demo-yulang-cascader",
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      codeStrF,
      slotArr: [
        { slotName: "a", slotTitle: "Cascader 级联选择器", level: 1 },
        { slotName: "b", slotTitle: "基础使用", level: 2 },
        { slotName: "c", slotTitle: "禁用选项", level: 2 },
        { slotName: "d", slotTitle: "可清空", level: 2 },
        { slotName: "e", slotTitle: "仅显示最后一级", level: 2 },
        // { slotName: "f", slotTitle: "多选", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
