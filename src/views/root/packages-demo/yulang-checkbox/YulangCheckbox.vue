<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a></template>

      <template #b>
        <yulang-describe-frame :codeStr="codeStr">
          <yulang-checkbox
            v-model="isCheckout"
            label="复选框"
            :disabled="false"
          />
          {{ isCheckout }}
          <yulang-button @click="btn">按钮</yulang-button>

          <template #tip>
            <div>v-model绑定的是是否选中</div>
            <div>label属性是左边的属性名称</div>
            <div>disabled属性表示是否不可用</div>
          </template>
        </yulang-describe-frame>
      </template>

      <!-- 以下开始是阅读文档 -->
      <template #u></template>

      <template #v>
        <yulang-table :data="tableDataAttributes">
          <yulang-table-item prop="attributeName" label="属性名">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明"> </yulang-table-item>
          <yulang-table-item prop="type" label="类型">
          </yulang-table-item>
          <yulang-table-item prop="default" label="默认值">
          </yulang-table-item>
        </yulang-table>
      </template>


    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr,tableDataAttributes } from './data.js';

export default {
  name: 'packages-yulang-checkbox',
  data() {
    return {
      isCheckout: false,
      slotArr: [
        { slotName: 'a', slotTitle: 'Checkbox 复选框', level: 1 },
        { slotName: 'b', slotTitle: '基本使用', level: 2 },
        { slotName: 'u', slotTitle: '阅读文档', level: 1 },
        { slotName: 'v', slotTitle: '属性', level: 2 },
      ],
      codeStr,
      tableDataAttributes
    };
  },
  methods: {
    btn() {
      this.isCheckout = !this.isCheckout;
    },
  },
};
</script>

<style lang="less" scoped></style>
