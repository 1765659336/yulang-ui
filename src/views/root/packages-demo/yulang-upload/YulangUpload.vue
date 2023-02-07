<template>
  <div>
    <yulang-anchor-point v-model="slotArr">
      <template #a></template>

      <!-- 基本用法 -->
      <template #b>
        <yulang-describe-frame :codeStr="codeStr">
          <!-- action="https://jsonplaceholder.typicode.com/posts/" -->
          <yulang-upload
            v-model="fileList"
            :limit="3"
            :on-preview="handlePreviews"
            single-pic-exceed="200kb"
          >
            <yulang-button>上传图片</yulang-button>
            <!-- 标志提示语 -->
            <template #tips> 上传文件大小不超过200kb、数量不超过3个 </template>
          </yulang-upload>
          <template #tip>
            <div>action属性来定义 upload 的请求地址</div>
            <div>limit属性来定义 upload 的请求文件数量,默认为3</div>
            <div>handlePreviews属性来定义 upload 的请求失败的回调函数</div>
            <div>single-pic-exceed属性来定义 upload 的单个请求文件大小</div>
            <div>tip插槽时写明文件提交注意事项</div>
          </template>
        </yulang-describe-frame>
      </template>

      <!-- 列表展示出来的样式插槽 -->
      <template #c>
        <yulang-describe-frame :codeStr="codeStr2">
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
          <template #tip>
            <div>fileListSlot插槽提供两个参数</div>
            <div>fileListSuccess返回下载成功列表</div>
            <div>fileListDelete为删除执行函数,参数表示删除那一行</div>
          </template>
        </yulang-describe-frame>
      </template>

      <!-- 以下开始是阅读文档 -->
      <template #u></template>

      <template #v>
        <yulang-table :data="tableDataAttributes">
          <yulang-table-item prop="attributeName" label="属性名">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明"> </yulang-table-item>
          <yulang-table-item prop="type" label="类型">
          </yulang-table-item>
          <yulang-table-item prop="default" label="默认值">
          </yulang-table-item>
          <yulang-table-item prop="callback" label="回调函数参数">
          </yulang-table-item>
        </yulang-table>
      </template>


      <template #w>
        <yulang-table :data="tableDataSlots">
          <yulang-table-item prop="slotName" label="插槽名">
          </yulang-table-item>
          <yulang-table-item prop="explain" label="说明"> </yulang-table-item>
        </yulang-table>
      </template>
    </yulang-anchor-point>
  </div>
</template>

<script>
import { codeStr, codeStr2, tableDataAttributes,tableDataSlots } from './data.js';
export default {
  name: 'packages-demo-yulang-upload',
  data() {
    return {
      fileList: [
        {
          id: 1,
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
        {
          id: 2,
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
        },
      ],
      slotArr: [
        { slotName: 'a', slotTitle: 'Upload 上传', level: 1 },
        { slotName: 'b', slotTitle: '基本用法', level: 2 },
        { slotName: 'c', slotTitle: '列表展示出来的样式插槽', level: 2 },
        { slotName: 'u', slotTitle: '阅读文档', level: 1 },
        { slotName: 'v', slotTitle: '属性', level: 2 },
        { slotName: 'w', slotTitle: '插槽', level: 2 },
      ],
      codeStr,
      codeStr2,
      tableDataAttributes,
      tableDataSlots
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
      return this.$confirm(`确定移除 ${file.name}?`);
    },
    uploadSuccessCallback(file) {
      let url = URL.createObjectURL(file);
      // 上传给后端，如果成功将其丢到成功的列表中
      let newImg = {};
      newImg.id = new Date().getTime(); // 设置一个唯一id
      newImg.name = file.name;
      newImg.url = url;
      this.fileList.push(newImg);
    },
  },
};
</script>

<style lang="less" scoped></style>
