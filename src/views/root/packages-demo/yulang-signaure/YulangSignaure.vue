<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a></template>

      <template #b>
        <yulang-describe-frame :codeStr="codeStr">
          <!-- 基本使用 -->
          <yulang-signaure
            :lineWidth="5"
            strokeStyle="red"
            canvasWidth="700"
          ></yulang-signaure>
          <template #tip>
            <div>lineWidth能设置画笔宽度</div>
            <div>strokeStyle能设置画笔颜色</div>
            <div>canvasHeight能设置画布宽度</div>
            <div>doloadFileName能设置下载文件名</div>
          </template>
        </yulang-describe-frame>
      </template>

      <template #c>
        @saveCallbackBase="saveCallbackBase"
        @saveCallbackBlob="saveCallbackBlob"
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr } from './data.js';

export default {
  name: 'packages-demo-yulang-signaure',
  data() {
    return {
      slotArr: [
        { slotName: 'a', slotTitle: 'Signaure 签字板', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '还没实现的', level: 2 },
      ],
      codeStr,
    };
  },
  methods: {
    saveCallbackBase(base) {
      console.log(base);
    },
    saveCallbackBlob(blob) {
      console.log(blob);
    },
  },
};
</script>

<style lang="less" scoped></style>
