export const codeStr = `
<yulang-checkbox
  v-model="isCheckout"
  label="复选框"
  :disabled="false"
/>
{{ isCheckout }}
<yulang-button @click="btn">按钮</yulang-button>

<script>
export default {
  data() {
    return {
      isCheckout: false,
    };
  },
  methods: {
    btn() {
      this.isCheckout = !this.isCheckout;
    },
  },
}
</script>
`

export const tableDataAttributes = [
  {
    attributeName: 'value',
    explain: '是否选中',
    type: 'Boolean',
    default: 'false',
  },
  {
    attributeName: 'label',
    explain: '右侧标签名',
    type: 'String',
    default: 'undefined',
  },
  {
    attributeName: 'disabled',
    explain: '是否禁用',
    type: 'Boolean',
    default: 'false',
  },
]