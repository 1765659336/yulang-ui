<template>
  <div class="select-contaniner" ref="yulangSelectReferenceRef">
    <!-- imput区域内容 -->
    <span
      class="input-class"
      id="input-property"
      tabindex="0"
      ref="referenceRef"
      @blur="handleBlur"
      @click.stop="changeShowPullDown"
    >
      <input
        type="text"
        class="input-class-initial"
        :value="value"
        :placeholder="placeholder"
        disabled
      />
      <img v-show="isShowPullDown" src="@/assets/images/downarrow.svg" />
      <img v-show="!isShowPullDown" src="@/assets/images/uparrow.svg" />
    </span>

    <!-- 展开区内容 -->
    <!-- <transition name="hh" appear> -->
    <div
      tabindex="0"
      v-show="isShowPullDown"
      ref="yulangSelectContentRef"
      @blur="handleBlur"
    >
      <slot></slot>
    </div>
    <!-- </transition> -->
  </div>
</template>

<script>
import { getPosition, changePosition } from '@/packages/lib';
import { positionArr } from '@/packages/constant';

export default {
  name: 'yulang-select',
  props: {
    // input值
    value: {
      type: String,
    },
    // 弹出框默认弹出的位置
    placement: {
      type: String,
      default: 'bottom-start',
      validator(value) {
        return positionArr.find((item) => item === value);
      },
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
  },
  data() {
    return {
      isShowPullDown: false,
      isRealShow: true,
    };
  },
  provide() {
    return {
      fatSelect: this,
    };
  },
  methods: {
    refreshInputValue(val) {
      this.$emit('input', val);
    },
    handleBlur() {
      setTimeout(() => {
        this.isShowPullDown = false;
      }, 150);
    },
    changeShowPullDown() {
      this.isShowPullDown = !this.isShowPullDown;
      this.isShowPullDown & this.$nextTick(this.getPositionFn);
    },
    getPositionFn() {
      changePosition(
        this.$refs.yulangSelectReferenceRef,
        this.$refs.referenceRef,
        this.$refs.yulangSelectContentRef,
        getPosition(
          this.placement,
          this.$refs.referenceRef,
          this.$refs.yulangSelectContentRef,
          20,
          20
        )
      );
    },
  },
  mounted() {
    this.$nextTick(this.getPositionFn);
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
