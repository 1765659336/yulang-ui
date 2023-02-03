<template>
  <div class="yulang-describe-frame-container">
    <h2>这是一个描述框</h2>
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
export default {
  name: 'packages-demo-yulang-describe-frame',
  data() {
    return {
      value3: true,
      codeStr:`
      <yulang-switch
        v-model="value"
        active-text="按月付费"
        inactive-text="按年付费"
      >
      </yulang-switch>
      <script>
        export default {
          data() {
            return {
              value: true
            }
          }
        };
      <//script>
      `
    };
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
