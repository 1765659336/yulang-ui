<template>
  <div class="select-contaniner">
    <span
      class="input-class"
      id="input-property"
      @click.stop="isShowPullDown = !isShowPullDown"
      tabindex="0"
      @blur="handleBlur"
    >
      <input type="text" class="input-class-initial" :value="value" disabled />
      <img v-show="isShowPullDown" src="@/assets/images/downarrow.svg" />
      <img v-show="!isShowPullDown" src="@/assets/images/uparrow.svg" />
    </span>

    <transition name="hh" appear>
      <div
        id="pull-down-visble"
        class="pull-down-visble"
        :class="addRealShow"
        :style="addRealPosition"
        tabindex="0"
        @blur="handleBlur"
        v-show="isRealShow"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'yulang-select',
  props: {
    value: {
      type: String,
    },
  },
  data() {
    return {
      isShowPullDown: false,
      isRealShow: true,
      pullDownPositionTop: 0,
      pullDownPositionLeft: 0,
    };
  },
  provide() {
    return {
      fatSelect: this,
    };
  },
  computed: {
    // 真的展示出来添加的样式
    addRealShow() {
      return {
        'pull-down-position': this.isRealShow,
      };
    },
    addRealPosition() {
      // if()
      return {
        '--pull-down-position-top--': this.pullDownPositionTop + 'px',
        '--pull-down-position-left--': this.pullDownPositionLeft + 'px',
      };
    },
  },
  methods: {
    hh(val) {
      this.$emit('input', val);
    },
    handleBlur() {
      setTimeout(() => {
        this.isShowPullDown = false;
      }, 100);
      // this.$emit('blur', event);
    },
    // 此处判断位置逻辑
    judgePullDownPosition(dom) {
      console.log(
        document.querySelector('#input-property').getBoundingClientRect()
      );
      const inputClientRect = document
        .querySelector('#input-property')
        .getBoundingClientRect();
      if (dom.bottom + dom.height > document.body.clientHeight) {
        this.pullDownPositionTop = -dom.height;
      } else {
        this.pullDownPositionTop = inputClientRect.height;
      }
    },
  },
  watch: {
    isShowPullDown(newval) {
      // 展开页面实行这个逻辑
      if (newval) {
        const pullDownVisble = document.querySelector('#pull-down-visble');
        // 拿到隐藏时的dom参数
        // 此处判断位置逻辑，到底是下方展开还是上方、右方展开呢？
        this.judgePullDownPosition(pullDownVisble.getBoundingClientRect());
        // 显示但是v-if为false
        pullDownVisble.style.visibility = 'visible';

        this.$nextTick(() => {
          this.isRealShow = false;

          this.$nextTick(() => {
            this.isRealShow = true;
          });
        });
      } else {
        // 这里需要优化，直接关闭子组件还没传值过来就关闭了
        this.isRealShow = false;
        this.$nextTick(() => {
          this.isRealShow = true;
          this.$nextTick(() => {
            const pullDownVisble = document.querySelector('#pull-down-visble');
            pullDownVisble.style.visibility = 'hidden';
          });
        });
      }
    },
  },
  mounted() {
    // 根据是否显示给visibility属性
    const pullDownVisble = document.querySelector('#pull-down-visble');
    // 不打开为隐藏（false）
    pullDownVisble.style.visibility = this.isShowPullDown
      ? 'visible'
      : 'hidden';
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
