<template>
  <div>
    <div class="packages-yulang-slider-container" ref="container">
      <div class="left" ref="left"></div>
      <div
        class="knob"
        ref="knob"
        id="knob"
        :title="sliderValue"
      >
        <div class="knobContent"></div>
      </div>
      <div class="right"></div>
    </div>
    <!-- <el-input-number
      v-if="isOpenDigitalModulation"
      :min="0"
      :max="100"
      v-model="elInputNumberValue"
      :step="props.sliderStep"
    /> -->
    <div v-if="isOpenDigitalModulation">
      <span @click="handleClick('sub')">-{{ sliderStep }}</span>
      <span>*****{{ elInputNumberValue }}*****</span>
      <span @click="handleClick('add')">+{{ sliderStep }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'packages-yulang-slider',
  props: {
    sliderValue: {
      type: Number,
      default: () => {
        return 0;
      },
    },
    // 步长
    sliderStep: {
      type: Number,
      default: () => {
        return 1;
      },
      validator(value) {
        // 如果是整数，能把100除尽且在[1,100]之间
        return (
          value % 1 === 0 && 100 % value === 0 && value >= 1 && value <= 100
        );
      },
    },
    // 是否开启数字调节滑块的值
    isOpenDigitalModulation: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
  data() {
    return {
      leftWidth: 0,
      mouseX: 0,
      mouseY: 0,
    };
  },
  computed: {
    elInputNumberValue: {
      get() {
        return this.sliderValue;
      },
      set(value) {
        this.$emit('update:sliderValue', value);
        this.$listeners.input && this.$listeners.input(value);
      },
    },

  },
  methods: {
    // 鼠标按下事件
    mouseDownHandler: function (e) {
      // 获取当前鼠标位置
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      this.leftWidth = this.$refs.left.getBoundingClientRect().width;
      // 在 `document` 上添加事件
      document.addEventListener('mousemove', this.mouseMoveHandler);
      document.addEventListener('mouseup', this.mouseUpHandler);

      // 添加按钮放大的样式
      this.$refs.knob.classList.add('knobClickClass')
    },
    // 鼠标移动事件
    mouseMoveHandler(e) {
      // 鼠标移动的距离
      const dx = e.clientX - this.mouseX;
      //   const dy = e.clientY - this.mouseY;
      // 整个滑块的宽度
      const containerWidth = this.$refs.container.offsetWidth;
      let newLeftWidth = ((this.leftWidth + dx) * 100) / containerWidth;
      this.changeSliderValue(newLeftWidth);
    },
    // 鼠标松开事件
    mouseUpHandler: function () {
      // 移除事件
      document.removeEventListener('mousemove', this.mouseMoveHandler);
      document.removeEventListener('mouseup', this.mouseUpHandler);
      this.$listeners.change && this.$listeners.change(this.elInputNumberValue);
    
      // 关闭按钮放大样式
      this.$refs.knob.classList.remove('knobClickClass')
    },
    // 修改slider的值
    changeSliderValue: function (newLeftWidth) {
      // 根据步长来移动(求商向下取整再乘回来)
      // 限制范围在 0 - 100的整数
      newLeftWidth = Math.round(
        Math.min(
          Math.round(
            Math.max(
              Math.round(newLeftWidth / this.sliderStep) * this.sliderStep,
              0
            )
          ),
          100
        )
      );
      console.log(newLeftWidth);
      this.$refs.left.style.width = `${newLeftWidth}%`;
      this.elInputNumberValue = newLeftWidth;
    },
    handleClick(type) {
      type === 'sub' && this.changeSliderValue(this.elInputNumberValue - 10);
      type === 'add' && this.changeSliderValue(this.elInputNumberValue + 10);
    },
  },
  mounted() {
    this.$refs.knob.addEventListener('mousedown', this.mouseDownHandler);
    // 读取传递进来的默认值，设置滑块的位置
    this.$refs.left.style.width = `${this.sliderValue}%`;
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
