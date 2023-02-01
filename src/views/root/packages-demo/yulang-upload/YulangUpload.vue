<template>
  <div>
    <h2>上传页面</h2>
    <yulang-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      :file-list.sync="fileList"
      :limit="3"
      :on-preview="handlePreviews"
      single-pic-exceed="200kb"
    >
      <yulang-button>上传图片</yulang-button>
      <template #tips> 上传文件大小不超过200kb、数量不超过3个 </template>
    </yulang-upload>
    <br />
    <br />
    <br />
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件,且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'packages-demo-yulang-upload',
  data() {
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
    };
  },
  methods: {
    handlePreviews(limit, fileList) {
      console.log('fileList', fileList);
      alert(
        '超出限制，最多上传' +
          limit +
          '个文件，当前目录共有' +
          fileList.length +
          '个文件'
      );
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
  },
};
</script>

<style lang="less" scoped></style>
