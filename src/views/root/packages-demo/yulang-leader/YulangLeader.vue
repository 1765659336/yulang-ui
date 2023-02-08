<template>
  <div>
    <yulang-leader :leader-list="leaderList"></yulang-leader>
    <div class="leader-test">试试多层class可不可以</div>
    <div class="leader-test">试试多层class可不可以</div>
    <div class="leader-test">试试多层class可不可以</div>
  </div>
</template>

<script>
export default {
  name: 'packages-demo-yulang-leader',
  data() {
    return {
      leaderList: [
        {
          // 指定id
          target: '#yulang-head-container',
          text: '这是step1,目标是上面的tab,目标是上面的tab',
          placement: 'bottom',
        },
        {
          // 指定id
          target: '#component-menu',
          text: '这是step2,目标是左侧的菜单',
          placement: 'right',
        },
        {
          // 指定id
          target: '.leader-test',
          text: '这是step3,目标是里面多层的class',
          placement: 'left',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
