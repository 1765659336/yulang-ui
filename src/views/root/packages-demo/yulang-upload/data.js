export const codeStr = `
<yulang-upload
  v-model="fileList"
  action="https://jsonplaceholder.typicode.com/posts/"
  :limit="3"
  :on-preview="handlePreviews"
  single-pic-exceed="200kb"
>
  <yulang-button>上传图片</yulang-button>
  <!-- 标志提示语 -->
  <template #tips> 上传文件大小不超过200kb、数量不超过3个 </template>
</yulang-upload>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          id: 1,
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?
          imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          id: 2,
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?
          imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    };
  },
  methods: {
    handlePreviews(limit, fileList) {
      alert(
        '超出限制，最多上传' +
          limit +
          '个文件，当前目录共有' +
          fileList.length +
          '个文件'
      );
    },  
  },
}
</script>
`

export const codeStr2 = `
<yulang-upload
  v-model="fileList"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreviews"
>
  <yulang-button>上传图片</yulang-button>
  <template #fileListSlot="{ fileListSuccess, fileListDelete }">
    <div v-for="item in fileListSuccess" :key="item.id">
      {{ item.name }}
      <button @click="fileListDelete(item)">点我删除哦</button>
    </div>
  </template>
</yulang-upload>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          id: 1,
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?
          imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          id: 2,
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?
          imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    };
  },
  methods: {
    handlePreviews(limit, fileList) {
      alert(
        '超出限制，最多上传' +
          limit +
          '个文件，当前目录共有' +
          fileList.length +
          '个文件'
      );
    },
  },
}
</script>
`

export const tableDataAttributes = [
  {
    attributeName: 'action',
    explain: '上传给后端的地址',
    type: 'String',
    default: 'undefined',
  },
  {
    attributeName: 'fileList',
    explain: '传入的要上传的列表',
    type: 'Array',
    default: '[]',
  },
  {
    attributeName: 'limit',
    explain: '限制上传的数量',
    type: 'Number',
    default: '3',
  },
  {
    attributeName: 'onPreview',
    explain: '上传数量出错的回调函数',
    type: 'Function',
    default: 'undefined',
    callback: 'limit,fileList'
  },
  {
    attributeName: 'singlePicExceed',
    explain: '限制单张图片大小',
    type: 'String(kb或者mb)',
    default: 'undefined',
  },
]

export const tableDataSlots = [
  {
    slotName: '默认插槽',
    explain: '提交点击区'
  },
  {
    slotName: 'tips',
    explain: '上传备注事项'
  },
  {
    slotName: 'fileListSlot',
    explain: '上传列表样式插槽'
  }
]