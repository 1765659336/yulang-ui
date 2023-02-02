<template>
  <div class="icon-container">
    <div
      v-for="(item, index) in iconArr"
      :key="index"
      class="icon-container-item"
    >
      <i :class="['iconfont', item.name]"></i>
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "packages-demo-yulang-icon",
  data() {
    return {
      iconArr: [
        { name: "icon-chevron-down" },
        { name: "icon-chevron-left" },
        { name: "icon-chevron-right" },
        { name: "icon-chevron-up" },
        { name: "icon-gengduo" },
        { name: "icon-guanbi" },
        { name: "icon-quanping" },
        { name: "icon-quanpingtuichu" },
        { name: "icon-jiuping" },
        { name: "icon-xiaoxi" },
        { name: "icon-shezhi" },
        { name: "icon-daochu" },
        { name: "icon-sousuo" },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
