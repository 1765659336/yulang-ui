export const codeStr = `
<div @click="dialogVisible = true">点我打开dialog</div>
<yulang-dialog
  :visible.sync="dialogVisible"
  :before-close="handleClose"
>
</yulang-dialog>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      console.log('这是调用组件的页面，需要执行传来的函数才能关闭窗口');
      done();
    }, 
  },
}
</script>
`

export const codeStr2 = `
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

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      console.log('这是调用组件的页面，需要执行传来的函数才能关闭窗口');
      done();
    }, 
  },
}
</script>
`