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
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr } from './data.js';

export default {
  name: 'packages-yulang-checkbox',
  data() {
    return {
      isCheckout: false,
      slotArr: [
        { slotName: 'a', slotTitle: 'Checkbox 复选框', level: 1 },
        { slotName: 'b', slotTitle: '基本使用', level: 2 },
      ],
      codeStr,
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
