<template>
  <div>
    <!-- 提交点击区 -->
    <div @click="clickBtn" ref="upload">
      <slot></slot>
    </div>

    <!-- 文件提交注意事项 -->
    <div class="TipClass">
      <slot name="tips"></slot>
    </div>

    <!-- 文件提交的列表 -->
    <slot name="fileListSlot" :fileListSuccess="fileListSuccess">
      <transition-group name="fileItemAnimation">
        <div
          v-for="item in fileListSuccess"
          :key="item.id"
          class="fileListClass"
        >
          <!-- 如果是其他类型（.txt,md）就用if判断，这里只写了图片 -->
          <img :src="item.url" alt="" class="fileItemImageClass" />
          {{ item.name }}
          <img
            src="./assets/delete.svg"
            alt=""
            @click="deleteItem(item)"
          />
        </div>
      </transition-group>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'yulang-upload',
  model: {
    prop: 'fileList',
    event: 'input',
  },
  data() {
    return {};
  },
  props: {
    action: {
      type: String,
      default: undefined,
    },
    fileList: {
      type: Array,
      default: () => [],
    },
    limit: {
      type: Number,
      default: 3,
    },
    onPreview: {
      type: Function,
      default: undefined,
    },
    // 单个图片大小限制，写成多少kb或者mb
    singlePicExceed: {
      type: String,
      validator: (val) => {
        const onePattern = /^([0]|[1-9][0-9]*)[k][b]$/;
        const twoPattern = /^([0]|[1-9][0-9]*)[m][b]$/;
        return onePattern.test(val) || twoPattern.test(val);
      },
    },
  },
  computed: {
    // 上传成功列表
    fileListSuccess: {
      get() {
        return this.fileList;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  methods: {
    clickBtn() {
      // 创建之前判断是否超出上传限制
      if (this.fileListSuccess.length >= this.limit) {
        this.onPreview(this.limit, this.fileListSuccess);
      } else {
        const input = document.createElement('input');
        input.type = 'file';
        input.click();
        input.addEventListener('change', (e) => {
          // 如果上传的是图片类型
          if (e.target.files[0].type.includes('image')) {
            // 图片限制的大小转换为byte
            let maxSize;
            if (this.singlePicExceed.includes('kb')) {
              maxSize = this.singlePicExceed.split('kb')[0] * 1024;
            } else if (this.singlePicExceed.includes('mb')) {
              maxSize = this.singlePicExceed.split('mb')[0] * 1024 * 1024;
            }
            // 创建前判断图片是否过大
            if (maxSize < e.target.files[0].size) {
              alert('图片太大了捏');
            } else {
              this.$listeners.uploadSuccessCallback &&
                this.$listeners.uploadSuccessCallback(e.target.files[0]);

              // 如果用户未设置发请求的写法，就按默认的请求方式来
              if (!this.$listeners.uploadSuccessCallback) {
                let url = URL.createObjectURL(e.target.files[0]);
                var image = new Image();
                image.src = url;

                image.onload = () => {
                  let BlobData = this.getBlobImage(image);
                  console.log(BlobData);
                  // 将base64文件发送后端请求
                  this.sendXML(BlobData).then((res) => {
                    console.log(res);
                  });
                };
              }
            }
          }
        });
      }
    },
    // 删除这个子项
    deleteItem(row) {
      // this.fileListSuccess.splice(index,1);
      this.fileListSuccess = this.fileListSuccess.filter(
        (item) => item.id != row.id
      );
      // this.fileListSuccess.pop()
    },
    getBlobImage(img) {
      var canvas = document.createElement('canvas');
      var width = img.naturalWidth || img.width;
      var height = img.naturalHeight || img.height;
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height); // 绘制图像
      var ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase(); // 图片格式
      var dataURL = canvas.toDataURL('image/' + ext); // 包含图片展示的 data URI

      // base64转二进制
      // function dataURLtoBlob(dataurl) {
      //   var arr = dataurl.split(','),
      //     mime = arr[0].match(/:(.*?);/)[1],
      //     bstr = atob(arr[1]),
      //     n = bstr.length,
      //     u8arr = new Uint8Array(n);
      //   while (n--) {
      //     u8arr[n] = bstr.charCodeAt(n);
      //   }
      //   return new Blob([u8arr], {
      //     type: mime,
      //   });
      // }

      return dataURL;
    },
    sendXML(imgbase64) {
      return new Promise(
        (resolve) => {
          // 要是用户不自己发请求，自己走xml发请求
          const xhr = new XMLHttpRequest();
          // 初始化(请求类型和请求地址)
          xhr.open('POST', this.action);
          // 发送
          xhr.send(imgbase64);

          xhr.onreadystatechange = function () {
            // 查看响应数字是否为4，表示响应数据全部返回
            console.log(xhr.readyState);
            if (xhr.readyState === 4) {
              // 查看响应码是否在200到300之间
              if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr);
              }
            }
          };
        }
      );
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
