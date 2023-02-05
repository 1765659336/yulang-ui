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