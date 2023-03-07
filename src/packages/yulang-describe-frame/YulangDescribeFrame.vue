<template>
  <div
    class="describe-frame-container"
    :style="{ '--container-width--': width }"
  >
    <div class="describe-frame-header" v-if="isheaderShow">
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
        v-if="codeStr"
      >
        <!-- 代码提示区 -->
        <div class="describe-frame-content-tip" v-if="isTipShow">
          <slot name="tip"></slot>
        </div>

        <!--  代码区 -->
        <div class="describe-frame-content-code" v-if="codeStr">
          <code style="white-space: pre">
            <div>{{ codeStr }}</div>
          </code>
        </div>
      </div>
    </div>

    <div class="describe-frame-footer" @click="changeDescribeFrameHeight">
      <div class="describe-frame-footer-center">
        <img src="@/assets/images/downarrow.svg" v-if="!isShow" />
        <img src="@/assets/images/uparrow.svg" v-else />
        <div v-if="!isShow">显示代码</div>
        <div v-else>隐藏代码</div>
      </div>

      <div class="copy">
        <div class="copyBtn" v-YulangCopy:[copySuccess]="codeStr">复制</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "yulang-describe-frame",
  data() {
    return {
      isShow: false,
      contentHeight: 0,
      value: "1234",
    };
  },
  props: {
    // 传入的内容区代码
    codeStr: {
      type: String,
      default: null,
    },
    // 描述框的宽度
    width: {
      type: String,
    },
  },
  computed: {
    isTipShow() {
      return this.$slots.tip;
    },
    isheaderShow() {
      return this.$slots.default;
    },
  },
  methods: {
    changeDescribeFrameHeight() {
      // 如果没显示
      if (!this.isShow) {
        this.isShow = !this.isShow;
        this.$nextTick(() => {
          this.contentHeight = this.$refs.describeFrameContent?.offsetHeight;
          this.$refs.describeFrameContent &&
            this.$refs.describeFrameContent.classList.add(
              "describeFrameContentAnimation"
            );
          this.$refs.describeFrameContent &&
            this.$refs.describeFrameContent.classList.remove(
              "describeFrameContentAnimationReverse"
            );
        });
      } else {
        this.$refs.describeFrameContent &&
          this.$refs.describeFrameContent.classList.add(
            "describeFrameContentAnimationReverse"
          );
        this.$refs.describeFrameContent &&
          this.$refs.describeFrameContent.classList.remove(
            "describeFrameContentAnimation"
          );
        setTimeout(() => {
          this.isShow = !this.isShow;
        }, 300);
      }
      console.log(this, "YulangDe");
    },
    copySuccess() {
      // console.log("info", "复制成功值为:" + value);
      this.$yulangNotification({
        message: "复制成功",
        type: "success",
      });
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
