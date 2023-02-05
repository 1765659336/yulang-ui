<template>
  <div class="container">
    <h1>AnchorPoint 锚点</h1>
    <yulang-describe-frame :codeStr="codeStr">
      <yulang-anchor-point v-model="slotArr">
        <template #a>
          <div :style="{ height: '1000px' }">a</div>
        </template>
        <template #b>b</template>
        <template #c><div :style="{ height: '1000px' }">c</div></template>
        <template #d>d</template>
        <template #e><div :style="{ height: '1000px' }">c</div></template>
        <template #f>d</template>
        <template #g><div :style="{ height: '1000px' }">c</div></template>
        <template #h>d</template>
      </yulang-anchor-point>
      <template #tip>
        <div>#a和slotArr中的slotName相对应</div>
        <div>slotTitle是标题名</div>
        <div>level是标题等级,等级越高字体越大</div>
      </template>
    </yulang-describe-frame>
  </div>
</template>

<script>
import { codeStr } from './data.js';

export default {
  name: 'packages-demo-yulang-anchor-point',
  data() {
    return {
      slotArr: [
        { slotName: 'a', slotTitle: 'MongoDB数据库', level: 1 },
        { slotName: 'b', slotTitle: '为什么要使用数据库', level: 2 },
        { slotName: 'c', slotTitle: '什么是数据库', level: 2 },
        { slotName: 'd', slotTitle: '下载MongoDB', level: 2 },
        { slotName: 'e', slotTitle: 'MongoDB 增删改查', level: 1 },
        { slotName: 'f', slotTitle: '创建集合', level: 2 },
        { slotName: 'g', slotTitle: '创建文档', level: 2 },
        { slotName: 'h', slotTitle: '创建文档的另一种方式', level: 2 },
      ],
      codeStr
    };
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
