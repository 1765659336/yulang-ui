<template>
  <yulang-anchor-point :slotArr="slotArr">
    <template #a>
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
  </yulang-anchor-point>
</template>

<script>
export default {
  name: "packages-demo-yulang-icon",
  data() {
    return {
      slotArr: [{ slotName: "a", slotTitle: "Icon 图标", level: 1 }],
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
        {
          name: "icon-yanjing",
          value: '<i class="iconfont icon-yanjing"></i>',
        },
        {
          name: "icon-shijian",
          value: '<i class="iconfont icon-shijian"></i>',
        },
        {
          name: "icon-kuaijin",
          value: '<i class="iconfont icon-kuaijin"></i>',
        },
        {
          name: "icon-kuaitui",
          value: '<i class="iconfont icon-kuaitui"></i>',
        },
        {
          name: "icon-jian",
          value: '<i class="iconfont icon-jian"></i>',
        },
        {
          name: "icon-jia",
          value: '<i class="iconfont icon-jia"></i>',
        },
        {
          name: "icon-shuaxin",
          value: '<i class="iconfont icon-shuaxin"></i>',
        },
        {
          name: "icon-jinggao",
          value: '<i class="iconfont icon-jinggao"></i>',
        },
        {
          name: "icon-guanbi1",
          value: '<i class="iconfont icon-guanbi1"></i>',
        },
        {
          name: "icon-zhengque",
          value: '<i class="iconfont icon-zhengque"></i>',
        },
        {
          name: "icon-tishi1",
          value: '<i class="iconfont icon-tishi1"></i>',
        },
        {
          name: "icon-riqi1",
          value: '<i class="iconfont icon-riqi1"></i>',
        },
        {
          name: "icon-yonghu",
          value: '<i class="iconfont icon-yonghu"></i>',
        },
        {
          name: "icon-zhuti_tiaosepan_o",
          value: '<i class="iconfont icon-zhuti_tiaosepan_o"></i>',
        },
      ],
    };
  },
  methods: {
    copySuccess(value) {
      // console.log("info", "复制成功值为:" + value);
      this.$yulangNotification({
        message: "复制成功" + value,
        type: "success",
        timeout: 3000,
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
