<template>
  <div
    class="packages-yulang-popover-container"
    :style="{
      '--yulang-popover-reference-width--': width + 'px',
      '--yulang-popover-position-min-height--': minHeight + 'px',
      '--yulang-popover-position-max-height--': maxHeight + 'px',
    }"
  >
    <div
      class="yulang-popover-reference"
      ref="yulangPopoverReferenceRef"
      v-YulangClickOutside="closeShow"
    >
      <!-- 触发点 -->
      <div ref="referenceRef" class="yulang-popover-reference-trigger">
        <slot name="reference"></slot>
      </div>
      <!-- 内容区 -->
      <transition
        @before-leave="transitionBeforeLeave"
        @enter="transitionEnter"
        :duration="{ enter: 500, leave: 500 }"
      >
        <div
          class="yulang-popover-position"
          v-if="isShow"
          ref="yulangPopoverContentRef"
        >
          <!-- 箭头 -->
          <!-- <div class="yulang-popover-triangle"></div> -->
          <!-- 标题 -->
          <div class="yulang-popover-title" v-if="title">
            <span>{{ title }}</span>
          </div>
          <!-- 内容区 -->
          <slot name="content">
            <div class="yulang-popover-content">
              <div>{{ content }}</div>
            </div>
          </slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { longClick, getPosition, changePosition } from '@/packages/lib';
import { positionArr } from '@/packages/constant';
export default {
  name: 'yulang-popover',
  props: {
    // popover弹出框中的文本
    content: {
      default: '',
    },
    // 弹出框的标题
    title: {},
    // 弹出框的宽度
    width: {
      type: Number,
      default: () => {
        return 200;
      },
    },
    // 弹出框的最小高度
    minHeight: {
      type: Number,
      default: () => {
        return 16;
      },
    },
    // 弹出框的最大的高度，超出最大高度开启滚动条
    maxHeight: {
      type: Number,
      default: () => {
        return 500;
      },
    },
    // 弹出框的触发方式
    trigger: {
      type: String,
      default: () => {
        return "click";
      },
      validator(value) {
        return ['click', 'hover', 'focus', 'manual'].find(
          (item) => item === value
        );
      },
    },
    // 弹出框默认弹出的位置
    placement: {
      type: String,
      default: 'bottom',
      validator(value) {
        return positionArr.find((item) => item === value);
      },
    },
    closeBeforeFn: {
      type: Function,
    },
    closeAfterFn: {
      type: Function,
    },
    closeBeforeValidator: {},
    openAfterFn: {
      type: Function,
    },
    openBeforeValidator: {},
  },
  data() {
    return {
      isShow: false,
      isFirst: true,
      time: null,
      time2: null,
    };
  },
  methods: {
    // 组件离开之前的钩子
    transitionBeforeLeave(el) {
      el.classList.remove('yulang-rotate-y-in');
      el.classList.add('yulang-rotate-y-out');
    },
    // 组件进入的钩子函数
    transitionEnter(el) {
      el.className += ' yulang-animate yulang-rotate-y-in';
    },
    // 关闭
    closeShow() {
      const fn = () => {
        this.closeBeforeFn && this.closeBeforeFn();
        this.isShow = false;
        this.closeAfterFn && this.closeAfterFn();
      };
      if (this.closeBeforeValidator) {
        if (this.closeBeforeValidator instanceof Promise) {
          this.closeBeforeValidator
            .then(() => {
              fn();
            })
            .catch();
        }
        if (
          typeof this.closeBeforeValidator === "function" &&
          this.closeBeforeValidator()
        ) {
          fn();
        }
      } else {
        fn();
      }
    },
    // 打开
    openShow() {
      const fn = () => {
        this.isShow = true;
        this.openAfterFn && this.openAfterFn();
      };
      if (this.openBeforeValidator) {
        if (this.openBeforeValidator instanceof Promise) {
          this.openBeforeValidator
            .then(() => {
              fn();
            })
            .catch();
        }
        if (
          typeof this.openBeforeValidator === "function" &&
          this.openBeforeValidator()
        ) {
          fn();
        }
      } else {
        fn();
      }
    },
    showChange(e, type) {
      if (type) {
        if (type === "down") {
          this.openShow();
        } else {
          this.closeShow();
        }
      } else {
        if (this.trigger === 'hover' && this.isShow) {
          // 如果是内容框到触发点，此时是带定时器的
          if (this.time2) {
            clearTimeout(this.time2);
            this.time2 = null;
          } else {
            this.time = setTimeout(() => (this.isShow = false), 100);
          }
        } else {
          this.isShow = !this.isShow;
        }
      }
      // 显示之前添加钩子
      if (this.$listeners.isShowBefore && !this.$listeners.isShowBefore()) {
        // 表示打开之前的钩子函数返回false，不让打开
        this.closeShow();
      } else {
        if (this.isShow) {
          this.$nextTick(() => {
            this.getPositionFn();
            if (this.trigger === "hover" && this.isFirst) {
              this.isFirst = false;
              this.addEventListener();
            }
          });
        }
      }
    },
    getPositionFn() {
      changePosition(
        this.$refs.yulangPopoverReferenceRef,
        this.$refs.referenceRef,
        this.$refs.yulangPopoverContentRef,
        getPosition(
          this.placement,
          this.$refs.referenceRef,
          this.$refs.yulangPopoverContentRef,
          20,
          20
        )
      );
    },
    // 给hover内容区也添加监听
    addEventListener() {
      this.$refs.yulangPopoverContentRef.addEventListener('mouseenter', () => {
        clearTimeout(this.time);
        this.time = null;
      });
      this.$refs.yulangPopoverContentRef.addEventListener('mouseleave', () => {
        this.time2 = setTimeout(() => {
          this.closeShow();
          this.isFirst = true;
        }, 100);
      });
    },
  },
  mounted() {
    if (this.$refs.yulangPopoverReferenceRef) {
      if (this.trigger === 'click') {
        this.$refs.referenceRef.addEventListener('click', (e) =>
          this.showChange(e)
        );
      }
      if (this.trigger === 'hover') {
        this.$refs.referenceRef.addEventListener('mouseenter', (e) => {
          // 如果是从外面进入hover的，需要将重新刷新
          if (this.time2 == null) {
            this.isFirst = true;
          }
          this.showChange(e);
        });
        this.$refs.referenceRef.addEventListener('mouseleave', (e) => {
          this.showChange(e);
        });
      }
      if (this.trigger === 'focus') {
        longClick(this.$refs.referenceRef, this.showChange.bind(this));
      }
    }
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
