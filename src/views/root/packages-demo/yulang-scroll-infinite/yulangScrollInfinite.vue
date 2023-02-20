<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #b>
        <yulang-describe-frame :codeStr="codeStr">
          <ul
            class="infinite-list"
            style="overflow: auto"
            v-YulangInfiniteScroll="load"
          >
            <li v-for="i in count" class="infinite-list-item" :key="i">
              {{ i }}
            </li>
          </ul>
          <template #tip>
            <div>v-YulangInfiniteScroll可以绑定promise异步请求</div>
            <div>会在返回值收到后再发请求</div>
          </template>
        </yulang-describe-frame>
      </template>

      <template #c>
        <yulang-describe-frame :codeStr="codeStr2">
          <ul
            class="infinite-list"
            style="overflow: auto"
            v-YulangInfiniteScroll="load2"
            yulang-infinite-scroll-disabled="disabled"
          >
            <li v-for="i in count2" class="infinite-list-item" :key="i">
              {{ i }}
            </li>
          </ul>
        </yulang-describe-frame>
      </template>

      <template #d>
        <yulang-describe-frame :codeStr="codeStr3">
          <ul
            class="infinite-list"
            style="overflow: auto"
            v-YulangInfiniteScroll="load3"
            yulang-infinite-scroll-minheight="50"
          >
            <li v-for="i in count3" class="infinite-list-item" :key="i">
              {{ i }}
            </li>
          </ul>
        </yulang-describe-frame>
      </template>

      <!-- 以下开始是阅读文档 -->
      <template #u></template>

      <template #v>
        <yulang-table :data="tableDataAttributes">
          <yulang-table-item prop="attributeName" label="属性名" width="200px">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明" width="450px">
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
import { codeStr, codeStr2, codeStr3, tableDataAttributes } from './data.js';

export default {
  name: 'packages-yulang-scroll-infinite',
  data() {
    return {
      slotArr: [
        { slotName: 'a', slotTitle: 'ScrollInfinite 无限滚动', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '禁止请求用法', level: 2 },
        { slotName: 'd', slotTitle: '距离触底多少触发用法', level: 2 },
        { slotName: 'u', slotTitle: '阅读文档', level: 1 },
        { slotName: 'v', slotTitle: '属性', level: 2 },
      ],
      count: 10,
      count2: 10,
      count3: 10,
      codeStr,
      codeStr2,
      codeStr3,
      tableDataAttributes,
    };
  },
  methods: {
    load() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.count += 2;
          resolve();
        }, 3000);
      });
    },
    load2() {
      this.count2 += 2;
    },
    load3() {
      return (this.count3 += 2);
    },
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
