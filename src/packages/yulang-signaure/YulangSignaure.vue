<template>
  <div>
    <div class="packages-signature-container">
      <yulang-button @click="clear">清空</yulang-button>
      <yulang-button @click="fallback">回退</yulang-button>
      <yulang-button @click="downLoad">下载</yulang-button>
      <yulang-button @click="save">保存</yulang-button>
      <canvas ref="cvs" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: "packages-yulang-signaure",
  props: {
    // 画笔的宽度
    lineWidth: {
      type: Number,
      default: () => {
        return 2;
      },
    },
    // 画笔的颜色
    strokeStyle: {
      type: String,
      default: () => {
        return "block";
      },
    },
    // 下载的文件名
    doloadFileName: {
      type: String,
      default: () => {
        return "canvas.png";
      },
    },
    // 画布的宽度
    canvasWidth: {
      type: String,
      default: () => {
        return "1000";
      },
    },
    // 画布的高度
    canvasHeight: {
      type: String,
      default: () => {
        return "500";
      },
    },
  },
  data() {
    return {
      // 控制是否绘制
      isDrawing: false,
      // 上一次是否回退过
      lastTimeLock: false,
    };
  },
  computed: {
    ctx() {
      return this.$refs.cvs.getContext("2d");
    },
    //    存放画布的状态
    cacheData: {
      get() {
        return [
          this.ctx.getImageData(
            0,
            0,
            Number(this.canvasWidth),
            Number(this.canvasHeight)
          ),
        ];
      },
      set() {},
    },
    // 计算canvas左上角原点距离网页左上角原点左边偏移量
    offsetLeft() {
      return this.$refs.cvs.getBoundingClientRect().left;
    },
    // 计算canvas左上角原点距离网页左上角原点顶部偏移量
    offsetTop() {
      return this.$refs.cvs.getBoundingClientRect().top;
    },
  },
  methods: {
    // 清空
    clear() {
      if (this.ctx) {
        this.ctx.clearRect(
          0,
          0,
          Number(this.canvasWidth),
          Number(this.canvasHeight)
        );
        this.cacheData = [
          this.ctx.getImageData(
            0,
            0,
            Number(this.canvasWidth),
            Number(this.canvasHeight)
          ),
        ];
      }
    },
    // 下载
    downLoad() {
      this.$refs.cvs.toBlob((blob) => {
        if (blob) {
          const a = document.createElement("a");
          document.body.append(a);
          a.download = this.doloadFileName;
          a.href = URL.createObjectURL(blob);
          a.click();
          a.remove();
        }
      });
    },
    // 回退
    fallback() {
      // 初始化渲染的时候，画板为空，cacheData.length === 1时，不能调用putImageData方法否则报错
      if (this.lastTimeLock && this.cacheData.length > 1) {
        // 上一次是新画的笔画，那么需要多pop一次
        this.cacheData.pop();
      }
      if (this.ctx) {
        if (this.cacheData.length === 1) {
          // 如果长度为1时，一直重置页面为空白页，也就是cacheData一开始给的默认值
          this.ctx.putImageData(this.cacheData[0], 0, 0);
        } else {
          // 否则回退到上一次画布的模样
          this.ctx.putImageData(this.cacheData.pop(), 0, 0);
        }
      }
      // 将上一次是否为回退的值改为true
      this.lastTimeLock = true;
    },
    // 保存
    save() {
      // 异步
      this.$refs.cvs.toBlob((blob) => {
        this.$listeners.saveCallbackBlob &&
          this.$listeners.saveCallbackBlob(blob);
      });
      // 同步
      const base = this.$refs.cvs.toDataURL();
      this.$listeners.saveCallbackBase &&
        this.$listeners.saveCallbackBase(base);
    },
  },
  mounted() {
    this.$refs.cvs.addEventListener("mousedown", (e) => {
      // 开始绘画
      this.isDrawing = true;
      if (this.ctx) {
        this.ctx.beginPath();
        // 设置画笔的粗细
        this.ctx.lineWidth = this.lineWidth;
        // 设置字体的颜色
        this.ctx.strokeStyle = this.strokeStyle;
        // 给canvas绘制定位
        this.ctx.moveTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        if (this.lastTimeLock) {
          // 如果上一次是回退，则将开始绘画前的这种状态也保存起来，不然在回退之后再绘画再回退，会丢失这次画布的状态
          this.cacheData.push(
            this.ctx.getImageData(
              0,
              0,
              Number(this.canvasWidth),
              Number(this.canvasHeight)
            )
          );
          this.lastTimeLock = false;
        }
      }
    });
    this.$refs.cvs.addEventListener("mousemove", (e) => {
      // 只有点击滑块开启绘画时，鼠标移动才会执行canvas绘画
      if (this.isDrawing && this.ctx) {
        // 绘制路径
        this.ctx.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        // 粘上颜色
        this.ctx.stroke();
      }
    });
    // 鼠标抬起
    this.$refs.cvs.addEventListener("mouseup", () => {
      // 是否绘画的值改为false
      this.isDrawing = false;
      if (this.ctx) {
        // 将这次绘画完的值存起来，为了回退用
        this.cacheData.push(
          this.ctx.getImageData(
            0,
            0,
            Number(this.canvasWidth),
            Number(this.canvasHeight)
          )
        );
      }
    });
  },
};
</script>

<style lang="less" scoped>
.custom-signature-container {
  border: 1px solid #ccc;
}
</style>
