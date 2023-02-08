<template>
  <div class="icon-container">
    <div
      v-for="(item, index) in iconArr"
      :key="index"
      class="icon-container-item"
      v-YulangCopy:[copySuccess]="item.value"
    >
      <div class="icon center">
        <i :class="['iconfont', item.name]"></i>
      </div>
      <div class="center">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "packages-demo-yulang-icon",
  data() {
    return {
      iconArr: [
        {
          name: "icon-chevron-down",
          value: '<i class="iconfont icon-chevron-down"></i>',
        },
        {
          name: "icon-chevron-left",
          value: '<i class="iconfont icon-chevron-left"></i>',
        },
        {
          name: "icon-chevron-right",
          value: '<i class="iconfont icon-chevron-right"></i>',
        },
        {
          name: "icon-chevron-up",
          value: '<i class="iconfont icon-chevron-up"></i>',
        },
        {
          name: "icon-gengduo",
          value: '<i class="iconfont icon-gengduo"></i>',
        },
        { name: "icon-guanbi", value: '<i class="iconfont icon-guanbi"></i>' },
        {
          name: "icon-quanping",
          value: '<i class="iconfont icon-quanping"></i>',
        },
        {
          name: "icon-quanpingtuichu",
          value: '<i class="iconfont icon-quanpingtuichu"></i>',
        },
        {
          name: "icon-jiuping",
          value: '<i class="iconfont icon-jiuping"></i>',
        },
        { name: "icon-xiaoxi", value: '<i class="iconfont icon-xiaoxi"></i>' },
        { name: "icon-shezhi", value: '<i class="iconfont icon-shezhi"></i>' },
        { name: "icon-daochu", value: '<i class="iconfont icon-daochu"></i>' },
        { name: "icon-sousuo", value: '<i class="iconfont icon-sousuo"></i>' },
      ],
    };
  },
  methods: {
    copySuccess(value) {
      console.log("info", "复制成功值为:" + value);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
