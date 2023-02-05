<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a></template>

      <template #b>
        <yulang-describe-frame class="frameClass" :codeStr="codeStr">
          <div @click="dialogVisible = true">点我打开dialog</div>
          <yulang-dialog
            :visible.sync="dialogVisible"
            :before-close="handleClose"
            key="1"
          >
          </yulang-dialog>
          <template #tip>
            <div>handleClose可以在关闭窗口前做一些操作</div>
            <div>像是设置一个确定关闭弹窗</div>
            <div>这个函数的参数是关闭窗口的函数，在需要关闭窗口时执行</div>
          </template>
        </yulang-describe-frame>
      </template>

      <template #c>
        <yulang-describe-frame class="frameClass" :codeStr="codeStr2">
          <div @click="dialogVisible1 = true">点我打开dialog</div>
          <yulang-dialog
            :visible.sync="dialogVisible1"
            :before-close="handleClose"
          >
            <template #footer="{ changeDialog }">
              <yulang-button @click="changeDialog(false)">取消消</yulang-button>
              <yulang-button @click="changeDialog(false)">确定定</yulang-button>
            </template>
          </yulang-dialog>

          <template #tip>
            <div>changeDialog是在使用自定义footer时使用</div>
            <div>用于关闭在设置自定义按钮后关闭弹窗</div>
          </template>
        </yulang-describe-frame>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr, codeStr2 } from './data.js';

export default {
  name: 'packages-demo-yulang-dialog',
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      slotArr: [
        { slotName: 'a', slotTitle: 'Dialog 对话框', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '可以定义footer插槽', level: 2 },
      ],
      codeStr,
      codeStr2,
    };
  },
  methods: {
    handleClose(done) {
      console.log('这是调用组件的页面，需要执行传来的函数才能关闭窗口');
      done();
    },
    // 通过插槽关闭弹窗
    cancelDialog() {
      this.diaValue = false;
    },
  },
};
</script>

<style lang="less" scoped>
.frameClass {
  width: 50em;
}
</style>
