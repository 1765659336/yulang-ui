export const codeStr = `
<yulang-switch v-model="value" @change="aa"></yulang-switch>
<button @click="outerClick">外面点击</button>

<script>
export default {
  data() {
    return {
      value: true,
    };
  },
  methods: {
    aa(val) {
      console.log(val);
    },
    outerClick() {
      this.value = !this.value;
    },
  },
}
</script>
`

export const codeStr2 = `
<yulang-switch
  v-model="value3"
  active-text="按月付费"
  inactive-text="按年付费"
></yulang-switch>

<script>
export default {
  data() {
    return {
      value3: true,
    };
  }
}
</script>
`

export const codeStr3 = `
<yulang-switch
  v-model="value2"
  inactive-color="#84adea"
  active-color="#2e2e2e"
></yulang-switch>

<script>
export default {
  data() {
    return {
      value2: true,
    };
  }
}
</script>
`
export const codeStr4 = `
<yulang-switch v-model="value4" disabled></yulang-switch>

<script>
export default {
  data() {
    return {
      value4: true,
    };
  }
}
</script>
`

export const tableDataAttributes = [
  {
    attributeName: 'v-model',
    explain: '绑定值',
    type: 'Boolean',
    default: 'true'
  },
  {
    attributeName: 'inactive-color',
    explain: '错误的背景样式',
    type: 'String(HEX)',
    default: '#ff4949'
  },
  {
    attributeName: 'active-color',
    explain: '正确的背景样式',
    type: 'String(HEX)',
    default: '#13ce66'
  },
  {
    attributeName: 'inactive-text',
    explain: '左侧失败文字',
    type: 'String',
    default: 'undefined'
  },
  {
    attributeName: 'active-text',
    explain: '左侧成功文字',
    type: 'String',
    default: 'undefined'
  },
  {
    attributeName: 'disabled',
    explain: '是否禁用',
    type: 'Boolean',
    default: 'false'
  },
]

export const tableDataEvent = [
  {
    eventName: 'change',
    explain: 'switch 状态发生变化时的回调函数',
    callback: '状态新值'
  }
]