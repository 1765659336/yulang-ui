<template>
  <div>
    这是一个对话框
    <yulang-describe-frame class="frameClass">
      <div @click="dialogVisible = true">点我打开dialog</div>
      <yulang-dialog
        :visible.sync="dialogVisible"
        :before-close="handleClose"
      >
        <template #footer="{ changeDialog }">
          <yulang-button @click="changeDialog(false)">取消消</yulang-button>
          <yulang-button @click="changeDialog(false)">确定定</yulang-button>
        </template>
      </yulang-dialog>
    </yulang-describe-frame>
  </div>
</template>

<script>
export default {
  name: 'packages-demo-yulang-dialog',
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      console.log('这是调用组件的页面，需要执行传来的函数才能关闭窗口');
      done()
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
