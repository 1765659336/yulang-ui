<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #b>
        <yulang-describe-frame :codeStr="codeStrB">
          <tree-b></tree-b>
        </yulang-describe-frame>
      </template>
      <template #c>
        <yulang-describe-frame :codeStr="codeStrC">
          <tree-c></tree-c>
        </yulang-describe-frame>
      </template>
      <template #d>
        <span>可将 Tree 的某些节点设置为默认展开或默认选中</span>
        <yulang-describe-frame :codeStr="codeStrD">
          <tree-d></tree-d>
          <template #tip>
            <div>
              分别通过defaultOpenKeys和defaultCheckKeys设置默认展开和默认选中的节点。
              需要注意的是，此时必须设置nodeKey，其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。
            </div>
          </template>
        </yulang-describe-frame>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import TreeB from "./components/TreeB.vue";
import TreeC from "./components/TreeC.vue";
import TreeD from "./components/TreeD.vue";
import { codeStrB, codeStrC, codeStrD } from "./data";

export default {
  name: "packages-demo-yulang-tree",
  components: {
    TreeB,
    TreeC,
    TreeD,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      slotArr: [
        { slotName: "a", slotTitle: "Tree 树", level: 1 },
        { slotName: "b", slotTitle: "基本用法", level: 2 },
        { slotName: "c", slotTitle: "可选择", level: 2 },
        { slotName: "d", slotTitle: "默认展开和默认选中", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
