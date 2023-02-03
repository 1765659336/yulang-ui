<template>
  <div class="describe-frame-container">
    <div class="describe-frame-header">
      <slot></slot>
    </div>

    <div
      class="describe-frame-content-animation"
      :style="{ '--height-content--': contentHeight + 'px' }"
    >
      <div
        class="describe-frame-content"
        v-show="isShow"
        ref="describeFrameContent"
      >
        <div class="describe-frame-content-tip">
          <slot name="tip"></slot>
        </div>
        <div class="describe-frame-content-code">
          <code style="white-space: pre">
            <div>{{ codeStr }}</div>
          </code>
        </div>
      </div>
    </div>

    <div class="describe-frame-footer" @click="changeDescribeFrameHeight">
      <div></div>
      <div class="describe-frame-footer-center">
        <img src="@/assets/images/downarrow.svg" v-if="!isShow" />
        <img src="@/assets/images/uparrow.svg" v-else />
        <div v-if="!isShow">显示代码</div>
        <div v-else>隐藏代码</div>
      </div>
      <div class="copy" v-Copy="codeStr">复制</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yulang-describe-frame',
  data() {
    return {
      isShow: false,
      contentHeight: 0,
      value: '1234',
    };
  },
  props: {
    codeStr: {
      type: String,
      default: null,
    },
  },
  computed: {
    // 内容框动画高度
    // contentHeightComputed(){
    //   return this.$refs.describeFrameContent?.offsetHeight || 0
    // }
  },
  methods: {
    changeDescribeFrameHeight() {
      // 如果没显示
      if (!this.isShow) {
        this.isShow = !this.isShow;
        this.$nextTick(() => {
          this.contentHeight = this.$refs.describeFrameContent?.offsetHeight;
          this.$refs.describeFrameContent.classList.add(
            'describeFrameContentAnimation'
          );
          this.$refs.describeFrameContent.classList.remove(
            'describeFrameContentAnimationReverse'
          );
        });
      } else {
        this.$refs.describeFrameContent.classList.add(
          'describeFrameContentAnimationReverse'
        );
        this.$refs.describeFrameContent.classList.remove(
          'describeFrameContentAnimation'
        );
        setTimeout(() => {
          this.isShow = !this.isShow;
        }, 300);
      }
    },
  },
  mounted(){
    console.log(this,"YulangDe");
  }
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
