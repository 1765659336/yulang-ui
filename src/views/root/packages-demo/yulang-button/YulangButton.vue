<template>
  <yulang-anchor-point v-model="slotArr">
    <template #a></template>

    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <button-b></button-b>
        <template #tip> 使用type来设置按钮的类型 </template>
      </yulang-describe-frame>
    </template>

    <template #c>
      <yulang-describe-frame :codeStr="codeStrC">
        <button-c></button-c>
        <template #tip> 使用size来设置按钮的尺寸 </template>
      </yulang-describe-frame>
    </template>

    <template #d>
      <yulang-describe-frame :codeStr="codeStrD">
        <button-d></button-d>
      </yulang-describe-frame>
    </template>

    <template #e>
      <yulang-describe-frame :codeStr="codeStrE">
        <button-e></button-e>
      </yulang-describe-frame>
    </template>
    <!-- 以下开始是阅读文档 -->
    <template #u></template>

    <template #v>
      <yulang-table :data="tableDataAttributes">
        <yulang-table-item prop="attributeName" label="属性名" width="200px">
        </yulang-table-item>
        <yulang-table-item prop="explain" label="说明" width="200px">
        </yulang-table-item>
        <yulang-table-item prop="type" label="类型" width="200px">
        </yulang-table-item>
        <yulang-table-item prop="default" label="默认值" width="200px">
        </yulang-table-item>
      </yulang-table>
    </template>
  </yulang-anchor-point>
</template>

<script>
import ButtonB from "./components/ButtonB.vue";
import ButtonC from "./components/ButtonC.vue";
import ButtonD from "./components/ButtonD.vue";
import ButtonE from "./components/ButtonE.vue";

import {
  codeStrB,
  codeStrC,
  codeStrD,
  codeStrE,
  tableDataAttributes,
} from "./data.js";
export default {
  name: "packages-demo-yulang-button",
  components: {
    ButtonB,
    ButtonC,
    ButtonD,
    ButtonE,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      codeStrE,
      slotArr: [
        { slotName: "a", slotTitle: "Button 按钮", level: 1 },
        { slotName: "b", slotTitle: "按钮类型", level: 2 },
        { slotName: "c", slotTitle: "按钮尺寸", level: 2 },
        { slotName: "d", slotTitle: "按钮禁用", level: 2 },
        { slotName: "e", slotTitle: "加载中", level: 2 },
        { slotName: "u", slotTitle: "阅读文档", level: 1 },
        { slotName: "v", slotTitle: "属性", level: 2 },
      ],
      tableDataAttributes,
    };
  },
};
</script>

<style lang="less" scoped></style>
