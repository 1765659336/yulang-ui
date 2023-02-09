<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a></template>

      <template #b>
        <yulang-leader
          :leader-list="leaderList"
          v-if="isShowLeader"
        ></yulang-leader>
        <yulang-describe-frame :codeStr="codeStr">
          <yulang-button @click="isShowLeader = !isShowLeader"
            >点我打开leader组件</yulang-button
          >
        </yulang-describe-frame>
      </template>

      <template #c>
        <div class="leader-test">试试内部class可不可以</div>
      </template>

      <!-- 以下开始是阅读文档 -->
      <template #u></template>

      <template #v>
        <yulang-table :data="tableDataAttributes">
          <yulang-table-item prop="attributeName" label="属性名" width="100px">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明" width="500px">
          </yulang-table-item>
          <yulang-table-item prop="type" label="类型" width="100px">
          </yulang-table-item>
          <yulang-table-item prop="default" label="默认值" width="100px">
          </yulang-table-item>
        </yulang-table>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr, tableDataAttributes } from './data.js';

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
      codeStr,
      slotArr: [
        { slotName: 'a', slotTitle: 'Leader 引导', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '第三步的引导框', level: 2 },
        { slotName: 'u', slotTitle: '阅读文档', level: 1 },
        { slotName: 'v', slotTitle: '属性', level: 2 },
      ],
      isShowLeader: false,
      tableDataAttributes,
    };
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
