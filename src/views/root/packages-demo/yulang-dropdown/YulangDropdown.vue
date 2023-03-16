<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>将动作或菜单折叠到下拉菜单中。</template>
    <template #b>
      <yulang-describe-frame :codeStr="codeStrB">
        <dropdown-b></dropdown-b>
      </yulang-describe-frame>
    </template>
    <template #c>
      可以配置popover都支持的触发方式，默认为click
      <yulang-describe-frame :codeStr="codeStrC">
        <dropdown-c></dropdown-c>
        <template #tip> 在trigger属性设置为hover即可。 </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作
      <yulang-describe-frame :codeStr="codeStrD">
        <dropdown-d></dropdown-d>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import DropdownB from "./components/DropdownB.vue";
import DropdownC from "./components/DropdownC.vue";
import DropdownD from "./components/DropdownD.vue";
import { codeStrB, codeStrC, codeStrD } from "./data";

export default {
  components: {
    YulangAnchorPoint,
    YulangDescribeFrame,
    DropdownB,
    DropdownC,
    DropdownD,
  },
  name: "packages-demo-yulang-dropdown",
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      slotArr: [
        { slotName: "a", slotTitle: "Dropdown下拉菜单", level: 1 },
        { slotName: "b", slotTitle: "基础用法", level: 2 },
        { slotName: "c", slotTitle: "触发方式", level: 2 },
        { slotName: "d", slotTitle: "指令事件", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
