export const codeStr = `
<div class="button-row">
  <yulang-button>默认按钮</yulang-button>
  <yulang-button type="success">成功按钮</yulang-button>
  <yulang-button type="error">失败按钮</yulang-button>
</div>
<div class="button-row">
  <yulang-button size="mini">默认按钮</yulang-button>
  <yulang-button size="small" type="success">成功按钮</yulang-button>
  <yulang-button size="medium" type="error">失败按钮</yulang-button>
</div>
<div class="button-row">
  <yulang-button disabled>默认按钮</yulang-button>
  <yulang-button disabled type="success">成功按钮</yulang-button>
  <yulang-button disabled type="error">失败按钮</yulang-button>
</div>
`

export const tableDataAttributes = [
  {
    attributeName: 'disabled',
    explain: '控制按钮是否禁用',
    type: 'Boolean',
    default: 'false'
  },
  {
    attributeName: 'type',
    explain: '设置按钮的主题',
    type: 'String(default、success、error)',
    default: 'default'
  },
  {
    attributeName: 'size',
    explain: '设置按钮的大小',
    type: 'String(medium、small、mini)',
    default: 'medium'
  }
]