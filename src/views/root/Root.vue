<template>
  <div class="container">
    <root-head></root-head>
    <keep-alive>
      <!-- 需要缓存的视图组件 -->
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不需要缓存的视图组件 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <!-- 这是引导组件 -->
    <yulang-leader
      :leader-list="leaderList"
      v-if="isShowLeader"
    ></yulang-leader>

    <!-- 这是回到顶部组件 -->
    <yulang-back-top :bottom="100" :right="100" :hiddenValue="100">
      <div class="back-top-radiu">
        <div class="back-top-triangle"></div>
      </div>
    </yulang-back-top>
  </div>
</template>

<script>
import RootHead from '@/views/root/components/root-head/RootHead.vue';
export default {
  name: 'yulang-root',
  components: {
    RootHead,
  },
  data() {
    return {
      isShowLeader: false,
      leaderList: [
        {
          // 指定id
          target: '#guide',
          text: '配置和使用yulangUI的一些相关事宜',
          placement: 'bottom',
        },
        {
          // 指定id
          target: '#packages-demo',
          text: '这里包含组件的使用说明演示和属性',
          placement: 'bottom',
        },
        {
          // 指定id
          target: '#theme',
          text: '不知道干嘛的',
          placement: 'bottom',
        },
        {
          // 指定id
          target: '#resources',
          text: '包含开箱即用的全局动画,自定义指令和工具函数',
          placement: 'bottom',
        },
        {
          // 指定id
          target: '#switchTheme',
          text: '主题的选择,支持自定义主题',
          placement: 'bottom',
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import url('./index.less');
</style>
