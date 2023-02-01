<template>
  <div class="app-container">
    <div class="canvasBroad">
      <canvas
        id="myCanvas"
        width="1300px"
        height="580px"
        class="canvas"
        @mousedown="drawLineMousedown($event)"
        @mousemove="drawLineMousemove($event)"
        @mouseup="drawLineMouseup($event)"
        @mouseout="drawLineMouseout($event)"
        @dblclick="deleteLine($event)"
      />

      <canvas
        id="myCanvas2"
        width="1300px"
        height="580px"
        class="canvas2"
        @mousedown="drawLineMousedown($event)"
        @mousemove="drawLineMousemove($event)"
        @mouseup="drawLineMouseup($event)"
        @mouseout="drawLineMouseout($event)"
        @dblclick="deleteLine($event)"
      />
    </div>
    <div class="bottomMenu">
      <div>
        <el-button type="primary" @click="changeStatus('pencil')">
          画笔
        </el-button>
        <el-button type="success" @click="changeStatus('line')">
          直线
        </el-button>
        <el-button type="success" @click="changeStatus('eraser')">
          橡皮
        </el-button>
        <el-button type="success" @click="callbackHandle()">
          撤回
        </el-button>
      </div>
      <div style="display:flex;width:100vw">
        <div
          v-for="(item, index) in color"
          :key="item"
          :style="{ 'background-color': color[index] }"
          :class="ischooseingColor == index ? 'chooseingColor' : 'chooseColor'"
          @click="ischooseingColor = index"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name:'packages-yulang-canvas',
  data() {
    return {
      status: "pencil",
      isDraw: false,
      x: 0,
      y: 0,
      lineX: 0,
      lineY: 0,
      ctx: null,
      ischooseingColor: 0,
      buffercanvas: [], //缓存的之前笔画记录
      color: [
        "#000000",
        "#409eff",
        "#67c23a",
        "#FFFF00",
        "#5e8491",
        "#dfb288",
        "#091a3d"
      ] //可选择的颜色
    };
  },
  methods: {
    //改变书写方式，像是划线，直线等
    changeStatus(status) {
      this.status = status;
    },
    //撤回之前步骤的方法
    callbackHandle() {
      const myCanvas = document.getElementById("myCanvas");
      const ctx = myCanvas.getContext("2d");
      const length = this.buffercanvas.length;
      if (length > 1) {
        this.buffercanvas.pop(); //从缓存中取出上一次作画的信息
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); //清除画板
        ctx.putImageData(this.buffercanvas[length - 2], 0, 0);
      } else if (length === 1) {
        this.buffercanvas.pop(); //从缓存中取出上一次作画的信息
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); //清除画板
      }
    },
    //按下触发的函数
    drawLineMousedown(e) {
      if (this.status == "pencil") {
        //画线
        this.isDraw = true;
        let { x, y, ctx } = this.handleCamvas(e, "myCanvas");
        ctx.beginPath();
        ctx.lineTo(x, y);
        ctx.stroke();
      } else if (this.status == "line") {
        //开始线段
        this.isDraw = true;
        let { x, y, ctx } = this.handleCamvas(e, "myCanvas2");
        this.x = x;
        this.y = y;
      } else if (this.status == "eraser") {
        this.isDraw = true;
      }
    },
    //鼠标移动
    drawLineMousemove(e) {
      if (this.status == "pencil") {
        //画线
        if (this.isDraw) {
          let { x, y, ctx } = this.handleCamvas(e, "myCanvas");
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      } else if (this.status == "line") {
        //移动线段
        if (this.isDraw) {
          if (this.ctx) {
            this.ctx.clearRect(
              0,
              0,
              this.ctx.canvas.width,
              this.ctx.canvas.height
            );
          }
          let { x, y, ctx } = this.handleCamvas(e, "myCanvas2");
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(x, y);
          ctx.stroke();
          this.lineX = x;
          this.lineY = y;
          this.ctx = ctx;
        }
      } else if (this.status == "eraser") {
        if (this.isDraw) {
          let { x, y, ctx } = this.handleCamvas(e, "myCanvas");
          ctx.clearRect(x - 15, y - 15, 30, 30);
        }
      }
    },

    //结束画
    drawLineMouseup(e) {
      if (this.status == "pencil") {
        //在作画过程中
        if (this.isDraw) {
          const myCanvas = document.getElementById("myCanvas");
          const ctx = myCanvas.getContext("2d");
          const imgData = ctx.getImageData(
            0,
            0,
            ctx.canvas.width,
            ctx.canvas.height
          );
          this.buffercanvas.push(imgData);
          this.isDraw = false;
        }
      } else if (this.status == "line") {
        //结束线段
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        const myCanvas = document.getElementById("myCanvas");
        const ctx = myCanvas.getContext("2d");
        ctx.strokeStyle = this.getPenColor();
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.lineX, this.lineY);
        ctx.stroke();

        //复制一份当前画面并丢进缓存数组中
        const imgData = ctx.getImageData(
          0,
          0,
          ctx.canvas.width,
          ctx.canvas.height
        );
        this.buffercanvas.push(imgData);

        this.isDraw = false;
      } else if (this.status == "eraser") {
        this.isDraw = false;
      }
    },

    //鼠标移出画面，触发函数，结束该次作画
    drawLineMouseout(e) {
      console.log(this.status);
      if (this.status == "pencil") {
        if (this.isDraw) {
          const myCanvas = document.getElementById("myCanvas");
          const ctx = myCanvas.getContext("2d");
          const imgData = ctx.getImageData(
            0,
            0,
            ctx.canvas.width,
            ctx.canvas.height
          );
          this.buffercanvas.push(imgData);
        }
      } else if (this.status == "line") {
        const myCanvas = document.getElementById("myCanvas2");
        const ctx = myCanvas.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      } else if (this.status == "eraser") {
      }

      this.isDraw = false;
    },

    /*
     * e 为event,触发事件的值
     *id 表示需要创建的canvas_id
     *x,y 表示返回了点击该点时触发的在此canvas的坐标
     *ctx 表示返回该cnavas对象
     */
    handleCamvas(e, id) {
      const myCanvas = document.getElementById(id);
      const ctx = myCanvas.getContext("2d");
      ctx.strokeStyle = this.getPenColor();
      let offsetLeft = ctx.canvas.offsetLeft;
      let offsetTop = ctx.canvas.offsetTop;
      const x = e.clientX - offsetLeft;
      const y = e.clientY - offsetTop;
      return { x, y, ctx };
    },

    //决定笔颜色的方法
    getPenColor() {
      for (let index in this.color) {
        if (this.ischooseingColor == index) return this.color[index];
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>

