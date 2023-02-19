<template>
  <div>
    下拉页面
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>111</div>
    <div>这是监听的高度</div>
    <div>可以将这个组件放到中间看展开效果</div>
    <div>只能用一个yulang-select,我里面用的id去修改的dom</div>
    <div>忘记改成ref了,有两个会存在多个id逻辑出问题</div>
    <yulang-select v-model="selectValue">
      <MyTest></MyTest>
    </yulang-select>
  </div>
</template>

<script>
import MyTest from './MyTest.vue';

export default {
  name: 'packages-demo-yulang-select',
  data() {
    return {
      selectValue: 'model值',
    };
  },
  components: {
    MyTest,
  },
};
</script>

<style lang="less" scoped></style>
