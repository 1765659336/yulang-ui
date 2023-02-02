<template>
  <yulang-anchor-point v-model="slotArr">
    <template #a>
      <div :style="{ height: '1000px' }">a</div>
    </template>
    <template #b>b</template>
    <template #c><div :style="{ height: '1000px' }">c</div></template>
    <template #d>d</template>
  </yulang-anchor-point>
</template>

<script>
export default {
  name: "packages-demo-yulang-anchor-point",
  data() {
    return {
      slotArr: [
        { slotName: "a", slotTitle: "一级标题a", level: 1 },
        { slotName: "b", slotTitle: "二级标题b", level: 2 },
        { slotName: "c", slotTitle: "一级标题c", level: 1 },
        { slotName: "d", slotTitle: "二级标题d", level: 1 },
      ],
    };
  },
};
</script>

<style lang="less" scoped></style>
