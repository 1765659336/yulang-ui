<template>
  <div>
    <!-- :class="[buttonVal ? 'circleSuccess' : 'circleFail']" -->
    <!-- <div class="test">{{ value }}</div> -->
    <div class="button">
      <span v-if="inactiveText" :style="TextClass(false)">{{
        inactiveText
      }}</span>
      <div :class="ButtonClass" :style="bgClassLogic" @click="changeVal">
        <div
          class="circle"
          :class="circleClass"
          ref="circleClassActive"
        ></div>
      </div>
      <span v-if="activeText" :style="TextClass(true)">{{ activeText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yulang-switch',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
    inactiveColor: {
      type: String,
      default: '#ff4949',
      validator: (val) => {
        const colorPattern = /^[#][1-f]{6}$/;
        return colorPattern.test(val);
      },
    },
    activeColor: {
      type: String,
      default: '#13ce66',
      validator: (val) => {
        const colorPattern = /^[#][1-f]{6}$/;
        return colorPattern.test(val);
      },
    },
    inactiveText: {
      type: String,
      default: undefined,
    },
    activeText: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  model: {
    // 需要双向绑定的 props 变量名称，也就是父组件通过 v-model 与子组件双向绑定的变量
    prop: 'value',
    // 定义由 $emit 传递变量的名称
    event: 'newValue',
  },
  computed: {
    ButtonClass() {
      return {
        ButtonClassCommon: true,
        ButtonClassAble: !this.disabled,
        ButtonClassDisabled: this.disabled,
      };
    },
    bgClassLogic() {
      let backgroundColor;
      // 是成功的情况下
      if (this.value) {
        backgroundColor = this.activeColor;
      } else {
        backgroundColor = this.inactiveColor;
      }
      return { backgroundColor };
    },
    buttonVal() {
      return this.value;
    },
    circleClass() {
      // index为0是判断是否为第一次初始化样式
      return {
        circleInitialSuccess: this.index === 0 && this.buttonVal,
        circleInitialFail: this.index === 0 &&  !this.buttonVal,
        circleSuccess:this.index !== 0 && this.buttonVal,
        circleFail: this.index !== 0 &&  !this.buttonVal,
      };
    },
  },
  data() {
    return {
      // 子组件不能修改 props 下的变量，所以定义一个临时变量
      sonValue: this.value,
      index: 0,
    };
  },
  methods: {
    changeVal() {
      this.sonValue = !this.sonValue;
      if (!this.disabled) {
        this.$emit('newValue', this.sonValue);
        this.$emit('change', this.sonValue);

        this.index++
      }
    },
    TextClass(bool) {
      // 判断当前汉字和按钮是否同边
      return this.buttonVal === bool ? { color: 'skyblue' } : {};
    },
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
