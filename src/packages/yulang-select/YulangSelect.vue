<template>
  <div class="select-contaniner" ref="yulangSelectReferenceRef">
    <yulang-popover :minWidth="200" :maxHeight="200" ref="popover">
      <template #reference>
        <!-- imput区域内容 -->
        <span
          class="input-class"
          id="input-property"
          tabindex="0"
          ref="referenceRef"
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
      </template>

      <template #content>
        <!-- 展开区内容 -->
        <!-- <transition name="hh" appear> -->
        <div tabindex="0" ref="yulangSelectContentRef">
          <slot></slot>
        </div>
        <!-- </transition> -->
      </template>
    </yulang-popover>
  </div>
</template>

<script>
// import { getPosition, changePosition } from '@/packages/lib';
import YulangPopover from '@/packages/yulang-popover/YulangPopover.vue';
import { positionArr } from '@/packages/constant';

export default {
  name: 'yulang-select',
  components: {
    YulangPopover,
  },
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
      isShowPullDown: true,
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
      this.isShowPullDown = true;
      this.$emit('input', val);
      this.$refs.popover.closeShow();
    },
    handleBlur() {
      this.isShowPullDown = !this.isShowPullDown;
    },
    changeShowPullDown() {
      this.$refs.popover.showChange();
      this.isShowPullDown = !this.isShowPullDown;
    },
    // getPositionFn() {
    //   changePosition(
    //     this.$refs.yulangSelectReferenceRef,
    //     this.$refs.referenceRef,
    //     this.$refs.yulangSelectContentRef,
    //     getPosition(
    //       this.placement,
    //       this.$refs.referenceRef,
    //       this.$refs.yulangSelectContentRef,
    //       20,
    //       20
    //     )
    //   );
    // },
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
