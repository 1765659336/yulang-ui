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
      isCheckout: true,
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

export const codeStrC = `
<yulang-checkbox
  v-model="isCheckout2"
  label="复选框2"
  :disabled="true"
/>
{{ isCheckout2 }}

<script>
export default {
  data() {
    return {
      isCheckout2: false,
    };
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