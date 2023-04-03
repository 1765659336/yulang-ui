<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a> 当选项过多时，使用下拉菜单展示并选择内容。 </template>
    <template #b>
      适用广泛的基础单选
      <yulang-describe-frame :codeStr="codeStrB">
        <select-b></select-b>
        <template #tip>
          v-model的值为当前被选中的el-option的 value 属性值
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      <yulang-describe-frame :codeStr="codeStrC">
        <select-c></select-c>
        <template #tip>
          在el-option中，设定disabled值为 true，即可禁用该选项
        </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      选择器不可用状态
      <yulang-describe-frame :codeStr="codeStrD">
        <select-d></select-d>
        <template #tip>
          为el-select设置disabled属性，则整个选择器不可用
        </template>
      </yulang-describe-frame>
    </template>
    <template #e>
      包含清空按钮，可将选择器清空为初始状态
      <yulang-describe-frame :codeStr="codeStrE">
        <select-e></select-e>
        <template #tip>
          为el-select设置clearable属性，则可将选择器清空。需要注意的是，clearable属性仅适用于单选。
        </template>
      </yulang-describe-frame>
    </template>
    <template #f>
      适用性较广的基础多选，用 Tag 展示已选项
      <yulang-describe-frame :codeStr="codeStrF">
        <select-f></select-f>
        <template #tip>
          为el-select设置multiple属性即可启用多选，此时v-model的值为当前选中值所组成的数组。
        </template>
      </yulang-describe-frame>
    </template>
    <template #g>
      可以自定义备选项
      <yulang-describe-frame :codeStr="codeStrG">
        <select-g></select-g>
        <template #tip>
          将自定义的 HTML 模板插入el-option的 slot 中即可。
        </template>
      </yulang-describe-frame>
    </template>
    <template #h>
      从服务器搜索数据，输入关键字进行查找
      <yulang-describe-frame :codeStr="codeStrH">
        <select-h></select-h>
        <template #tip>
          为了启用远程搜索，需要将filterable和remote设置为true，同时传入一个remote-method。
          remote-method为一个Function，它会在输入值发生变化时调用，参数为当前输入值。
          需要注意的是，如果el-option是通过v-for指令渲染出来的，
          此时需要为el-option添加key属性，且其值需具有唯一性，比如此例中的item.value。
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import SelectB from "./components/SelectB.vue";
import SelectC from "./components/SelectC.vue";
import SelectD from "./components/SelectD.vue";
import SelectE from "./components/SelectE.vue";
import SelectF from "./components/SelectF.vue";
import SelectG from "./components/SelectG.vue";
import SelectH from "./components/SelectH.vue";

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
  name: "packages-demo-yulang-select",
  components: {
    SelectB,
    SelectC,
    SelectD,
    SelectE,
    SelectF,
    SelectG,
    SelectH,
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
        { slotName: "a", slotTitle: "Select 选择器", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "有禁用选项", level: 2 },
        { slotName: "d", slotTitle: "禁用状态", level: 2 },
        { slotName: "e", slotTitle: "可清空单选", level: 2 },
        { slotName: "f", slotTitle: "基础多选", level: 2 },
        { slotName: "g", slotTitle: "自定义模板", level: 2 },
        { slotName: "h", slotTitle: "远程搜索", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
