export const codeStrB = `
<yulang-table :data="tableData">
  <yulang-table-item prop="date" label="日期" width="100px">
  </yulang-table-item>
  <yulang-table-item prop="name" label="姓名" width="150px">
  </yulang-table-item>
  <yulang-table-item prop="address" label="地址" width="300px">
  </yulang-table-item>
</yulang-table>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
      ],
    };
  },
}
</script>
`

export const codeStrC = `
<yulang-table :data="tableData" :isShowBorder="true">
  <yulang-table-item prop="date" label="日期" width="100px">
  </yulang-table-item>
  <yulang-table-item prop="name" label="姓名" width="150px">
  </yulang-table-item>
  <yulang-table-item prop="address" label="地址" width="300px">
  </yulang-table-item>
</yulang-table>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
      ],
    };
  },
}
</script>
`

export const codeStrD = `
<yulang-table :data="tableData" :isShowBorder="true">
  <yulang-table-item prop="date" label="日期" width="100px">
  </yulang-table-item>
  <yulang-table-item prop="name" label="姓名" width="150px">
  </yulang-table-item>
  <yulang-table-item prop="address" label="地址" width="300px">
  </yulang-table-item>
  <yulang-table-item prop="operation" label="操作" width="300px">
    <template #scope="scope">
      <yulang-button @click="handleClick(scope)">编辑</yulang-button>
      <yulang-button @click="handleClick(scope)">查看</yulang-button>
    </template>
  </yulang-table-item>
</yulang-table>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
        },
      ],
    };
  },
  methods: {
    handleClick(value) {
      this.$yulangNotification({
        message: value.scope.row,
        type: "success",
        timeout: 3000,
      });
    },
  },
}
</script>
`

export const tableDataAttributes = [
  {
    attributeName: 'data',
    explain: 'table数据数组',
    type: 'Array',
    default: 'undefined'
  },
  {
    attributeName: 'minWidth',
    explain: '表格宽度',
    type: 'String',
    default: '180px'
  },
]

export const tableDataSlots = [
  {
    slotName: '默认插槽',
    explain: '展示table的顶部属性名区域'
  }
]

export const tableDataItemAttributes = [
  {
    attributeName: 'prop',
    explain: '属性名,与table中属性名对应',
    type: 'String',
    default: 'undefined'
  },
  {
    attributeName: 'label',
    explain: '标签名,在table中展示的名称',
    type: 'String',
    default: 'undefined'
  },
  {
    attributeName: 'width',
    explain: '在table中的宽度(120px、3em)',
    type: 'String',
    default: 'undefined'
  },
]