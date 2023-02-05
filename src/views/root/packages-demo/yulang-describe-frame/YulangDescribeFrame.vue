<template>
  <div class="yulang-describe-frame-container">
    <h1>DescribeFrame 描述框</h1>
    <div class="yulang-describe-frame-content">
      <yulang-describe-frame :codeStr="codeStr">
        <yulang-switch
          v-model="value3"
          active-text="按月付费"
          inactive-text="按年付费"
        >
        </yulang-switch>
        <template #tip>
          使用active-text属性与inactive-text属性来设置开关的文字描述。
        </template>
      </yulang-describe-frame>
    </div>
  </div>
</template>

<script>
import { codeStr } from './index.js';
export default {
  name: 'packages-demo-yulang-describe-frame',
  data() {
    return {
      value3: true,
      codeStr,
    };
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
