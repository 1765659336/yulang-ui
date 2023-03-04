<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #b>
        <div>基础的、简洁的标签页。</div>
        <yulang-describe-frame :codeStr="codeStrB">
          <tabs-b></tabs-b>
          <template #tip>
            Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 value
            属性来指定当前选中的标签页。
          </template>
        </yulang-describe-frame>
      </template>
      <template #c>
        <div>选项卡样式的标签页。</div>
        <yulang-describe-frame :codeStr="codeStrC">
          <tabs-c></tabs-c>
          <template #tip>
            只需要设置 type 属性为 card 就可以使选项卡改变为标签风格。
          </template>
        </yulang-describe-frame>
      </template>
      <template #d>
        <div>卡片化的标签页</div>
        <yulang-describe-frame :codeStr="codeStrD">
          <tabs-d></tabs-d>
          <template #tip> 将type设置为border-card。 </template>
        </yulang-describe-frame>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import TabsB from "./components/TabsB.vue";
import TabsC from "./components/TabsC.vue";
import TabsD from "./components/TabsD.vue";
import { codeStrB, codeStrC, codeStrD } from "./data";
export default {
  name: "packages-demo-yulang-tabs",
  components: {
    TabsB,
    TabsC,
    TabsD,
    YulangDescribeFrame,
  },
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      slotArr: [
        { slotName: "a", slotTitle: "Tabs 标签页", level: 1 },
        { slotName: "b", slotTitle: "基本用法", level: 2 },
        { slotName: "c", slotTitle: "选项卡样式", level: 2 },
        { slotName: "d", slotTitle: "卡片化", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
