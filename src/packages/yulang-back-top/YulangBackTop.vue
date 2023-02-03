<template>
  <div
    class="packages-back-top-container"
    :style="renderStyle"
    @click="backTop"
    v-show="isShow"
  >
    <slot>回到顶部</slot>
  </div>
</template>

<script>
export default {
  name: "yulang-back-top",
  props: {
    right: {
      type: Number,
      default: () => {
        return 0;
      },
    },
    bottom: {
      type: Number,
      default: () => {
        return 0;
      },
    },
    hiddenValue: {
      type: Number,
      default: () => {
        return 0;
      },
    },
    animationTime: {
      type: Number,
      default: () => {
        return 5;
      },
    },
  },
  data() {
    return {
      isShow: false,
      timer: null,
    };
  },
  computed: {
    renderStyle() {
      return { right: this.right + "px", bottom: this.bottom + "px" };
    },
  },
  methods: {
    backTop() {
      this.timer = setInterval(() => {
        const scrollTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (scrollTop === 0) {
          clearInterval(this.timer);
        }
        document.body.scrollTop = document.documentElement.scrollTop =
          Math.floor(scrollTop * 0.9);
      }, this.animationTime);
    },
  },
  mounted() {
    if (
      document.documentElement.scrollTop ||
      document.body.scrollTop > this.hiddenValue
    ) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
    window.addEventListener("scroll", () => {
      // 再次滚动时，移除上一次的动画(bug)
      const scrollY =
        document.documentElement.scrollTop || document.body.scrollTop;
      console.log(scrollY, this.hiddenValue);
      if (scrollY > this.hiddenValue) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
