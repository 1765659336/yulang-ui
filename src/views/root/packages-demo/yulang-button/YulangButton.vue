<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a></template>
      <template #b>
        <yulang-describe-frame :codeStr="codeStr">
          <div class="button-row">
            <yulang-button>默认按钮</yulang-button>
            <yulang-button type="success">成功按钮</yulang-button>
            <yulang-button type="error">失败按钮</yulang-button>
          </div>
          <div class="button-row">
            <yulang-button size="mini">默认按钮</yulang-button>
            <yulang-button size="small" type="success">成功按钮</yulang-button>
            <yulang-button size="medium" type="error">失败按钮</yulang-button>
          </div>
          <div class="button-row">
            <yulang-button disabled>默认按钮</yulang-button>
            <yulang-button disabled type="success">成功按钮</yulang-button>
            <yulang-button disabled type="error">失败按钮</yulang-button>
          </div>
          <template #tip>
            使用type、size、disabled属性来定义 Button 的样式。
          </template>
        </yulang-describe-frame>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr } from './data.js';

export default {
  name: 'packages-demo-yulang-button',
  data() {
    return {
      codeStr,
      slotArr: [
        { slotName: 'a', slotTitle: 'Button 按钮', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
      ],
    };
  },
  methods: {
    btn() {
      console.log('object');
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
