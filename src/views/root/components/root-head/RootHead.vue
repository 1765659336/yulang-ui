<template>
  <div class="yulang-head-container">
    <h3 class="yulang-head-title">
     王元肉和喻浪的组件
    </h3>
    <div class="yulang-head-menu-items">
      <div
        @click="jump(index, item)"
        class="yulang-head-menu-item"
        :class="menuItemClass(index)"
        v-for="(item, index) in btnArr"
        :key="item.title"
      >
        {{ item.title }}
      </div>
    </div>
    <div>中文</div>
    <!-- <yulang-button @click="btn" size="small">不禁用按钮</yulang-button>
    <yulang-button type="success" size="mini">不禁用按钮</yulang-button>
    <yulang-button type="error">不禁用按钮</yulang-button>
    <yulang-button disabled @click="btn">按钮</yulang-button>
    <yulang-button disabled>不禁用按钮</yulang-button>
    <yulang-button disabled>不禁用按钮</yulang-button> -->
  </div>
</template>

<script>
export default {
  name: 'yulang-head',
  data() {
    return {
      selectIndex: 1,
      btnArr: [
        {
          title: '指南',
          path: '/root/guide',
        },
        {
          title: '组件',
          path: '/root/packages-demo',
        },
        {
          title: '主题',
          path: '/root/home',
        },
        {
          title: '资源',
          path: '/root/home',
        },
      ],
    };
  },
  methods: {
    // 跳转到组件页面
    jump(index, item) {
      this.$router.push(item.path);
      this.selectIndex = index;
    },
    menuItemClass(index) {
      return {
        // 选中样式
        ['yulang-head-menu-item-active']: index === this.selectIndex,
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
