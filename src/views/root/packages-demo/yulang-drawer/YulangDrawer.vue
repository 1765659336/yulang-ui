<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
      有些时候, Dialog 组件并不满足我们的需求, 比如你的表单很长,
      亦或是你需要临时展示一些文档, Drawer 拥有和 Dialog 几乎相同的 API, 在 UI
      上带来不一样的体验.
    </template>
    <template #b>
      呼出一个临时的侧边栏, 可以从多个方向呼出
      <yulang-describe-frame :codeStr="codeStrB">
        <drawer-b></drawer-b>
        <template #tip>
          需要设置 visible 属性，它的类型是 boolean,当为 true 时显示
          Drawer。Drawer 分为两个部分：title 和 body，title 需要具名为 title 的
          slot, 也可以通过 title 属性来定义，默认值为空。需要注意的是, Drawer
          默认是从右往左打开, 当然可以设置对应的 direction, 详细请参考 direction
          用法 最后，本例还展示了 beforeClose 的用法
        </template>
      </yulang-describe-frame>
    </template>
    <template #c>
      <yulang-describe-frame :codeStr="codeStrC">
        <drawer-c></drawer-c>
        <template #tip>
          当遇到不需要 title 的场景时, 可以通过 withHeader 这个属性来关闭掉
          title 的显示, 这样可以留出更大的空间给到用户, 为了用户的可访问性,
          请务必设定 title 的值
        </template>
      </yulang-describe-frame>
    </template>
    <template #d>
      <yulang-describe-frame :codeStr="codeStrD">
        <drawer-d></drawer-d>
        <template #tip>
          用height设置抽屉的高度，当direction为top/bottom时生效。
          用width设置抽屉的宽度，当direction为left/right时生效
        </template>
      </yulang-describe-frame>
    </template>
  </yulang-anchor-point>
</template>

<script>
import YulangAnchorPoint from "@/packages/yulang-anchor-point/YulangAnchorPoint.vue";
import YulangDescribeFrame from "@/packages/yulang-describe-frame/YulangDescribeFrame.vue";
import DrawerB from "./components/DrawerB.vue";
import DrawerC from "./components/DrawerC.vue";
import DrawerD from "./components/DrawerD.vue";
import { codeStrB, codeStrC, codeStrD } from "./data";

export default {
  components: {
    YulangAnchorPoint,
    YulangDescribeFrame,
    DrawerB,
    DrawerC,
    DrawerD,
  },
  name: "packages-demo-yulang-drawer",
  data() {
    return {
      codeStrB,
      codeStrC,
      codeStrD,
      slotArr: [
        { slotName: "a", slotTitle: "Drawer 抽屉", level: 1 },
        { slotName: "b", slotTitle: "基本用法", level: 2 },
        { slotName: "c", slotTitle: "不添加 Title", level: 2 },
        { slotName: "d", slotTitle: "手动配置尺寸", level: 2 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
