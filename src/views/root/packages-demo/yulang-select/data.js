export const codeStr = `
<yulang-select v-model="selectValue">
  <yulang-options :data="options"></yulang-options>
</yulang-select>
export default {
  data() {
    return {
      selectValue: '',
      options: [
        {
          name: 'KFC',
          label: 'KFC',
        },
        {
          name: '麦当劳',
          label: '麦当劳',
        },
        {
          name: '华莱士',
          label: '华莱士',
        },
        {
          name: '必胜客',
          label: '必胜客',
        },
      ]
    }
  }
};
`

export const codeStr2 = `
<yulang-select v-model="selectValue2" placement="left" class="select-frame-item">
  <yulang-options :data="options2"></yulang-options>
</yulang-select>

<yulang-select v-model="selectValue3" placement="top-end" class="select-frame-item">
  <yulang-options :data="options2"></yulang-options>
</yulang-select>
export default {
  data() {
    return {
      selectValue2: '',
      selectValue3: '',
      options2: [
        {
          name: '唱',
          label: '唱',
        },
        {
          name: '跳',
          label: '跳',
        },
        {
          name: 'RAP',
          label: 'RAP',
        },
        {
          name: '篮球',
          label: '篮球',
        },
      ],
    }
  }
};
`

export const tableDataAttributes = [
  {
    attributeName: 'selectValue',
    explain: '初始的input值',
    type: 'String',
    default: 'undefined',
  },
  {
    attributeName: 'placeholder',
    explain: '默认的占位字符，',
    type: 'String',
    default: 'undefined',
  },
  {
    attributeName: 'placeholder',
    explain: '弹窗打开的位置',
    type: 'String',
    default: 'undefined',
  },
]