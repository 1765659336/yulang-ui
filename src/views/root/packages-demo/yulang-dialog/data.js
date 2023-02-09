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

export const tableDataAttributes = [
  {
    attributeName: 'visible',
    explain: '弹窗是否可见',
    type: 'Boolean',
    default: 'false',
    callback: ''
  },
  {
    attributeName: 'beforeClose',
    explain: '关闭对话框的之前的函数',
    type: 'Function',
    default: 'undefined',
    callback: '关闭对话框函数'
  },
  {
    attributeName: 'isShowMaskLayer',
    explain: '是否展示遮罩层',
    type: 'Boolean',
    default: 'true',
    callback: ''
  }
]

export const tableDataSlots = [
  {
    slotName: 'title',
    explain: '头部标题插槽'
  },
  {
    slotName: 'content',
    explain: '内容插槽'
  },
  {
    slotName: 'footer',
    explain: '脚部按钮插槽'
  },
]

export const tableDataSlotAttributes = [
  {
    slotName: 'footer',
    scopeAttributeName: 'changeDialog',
    explain: '改变弹窗的函数',
    arguments: 'Boolean',
  }
]