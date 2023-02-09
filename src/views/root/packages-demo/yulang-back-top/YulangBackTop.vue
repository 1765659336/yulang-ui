<template>
  <div class="container">
    <h1>BackTop 回到顶部</h1>
    <div>用于实现回到顶部的功能</div>
    <h2>请向下滚动(右下角会有回到顶部的按钮)</h2>
    <code style="white-space: pre">
      {{ article }}
    </code>
    <yulang-describe-frame :codeStr="codeStr">
      <template #tip>
        <div>通过bottom、right来设置位置</div>
        <div>hiddenValue是表示下移距离顶部多少时出现或者消失</div>
        <div>animationTime表示滚动时间间隔</div>
      </template>
    </yulang-describe-frame>

    <yulang-back-top></yulang-back-top>
    <yulang-back-top :bottom="100" :right="100" :hiddenValue="100"
      >快速回到顶部
    </yulang-back-top>
    <yulang-back-top
      :bottom="150"
      :right="150"
      :hiddenValue="100"
      :animationTime="100"
      >慢速回到顶部
    </yulang-back-top>
    <br /><br />

    <!-- 文档部分 -->
    <h1>阅读文档</h1>
    <h2>属性</h2>
    <yulang-table :data="tableDataAttributes">
      <yulang-table-item prop="attributeName" label="属性名" width="200px">
      </yulang-table-item>
      <yulang-table-item prop="explain" label="说明" width="200px">
      </yulang-table-item>
      <yulang-table-item prop="type" label="类型" width="200px">
      </yulang-table-item>
      <yulang-table-item prop="default" label="默认值" width="200px">
      </yulang-table-item>
    </yulang-table>
  </div>
</template>

<script>
import { article, codeStr, tableDataAttributes } from './data.js';

export default {
  name: 'packages-yulang-back-top',
  data() {
    return {
      article,
      codeStr,
      tableDataAttributes,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  height: 1000px;
  // color: red;
}
</style>
