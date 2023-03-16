<template>
  <div
    class="packages-main-form-anchor-point-container"
    ref="container"
    :style="{
      '--offsetTop-container--': containerOffsetTop + 'px',
      '--height-container--': containerHeight + 'px',
    }"
  >
    <div class="packages-main-form-anchor-point-content">
      <div
        class="packages-main-form-anchor-point-content-item"
        v-for="item in slotArrComputed"
        :key="item.slotName"
        :id="item.slotName"
      >
        <!-- 根据标签等级给标题大小 -->
        <h2
          class="packages-main-form-anchor-point-content-item-title"
          :style="{ '--title-font-size--': titleFontSize(item) }"
        >
          {{ item.slotTitle }}
        </h2>

        <slot :name="[item.slotName]"> </slot>
      </div>
    </div>

    <div
      class="packages-main-form-anchor-point-click yulang-animate"
      :class="computedShowfade"
    >
      <div class="packages-main-form-anchor-point-click-arrow">
        <i
          class="iconfont icon-chevron-left"
          :class="isShowFade ? 'icon-chevron-left' : 'icon-chevron-right'"
          @click="isShowFade = !isShowFade"
        ></i>
      </div>
      <div id="packages-main-form-anchor-point-click">
        <div
          v-for="(item, index) in slotArrComputed"
          :key="item.slotName"
          class="packages-main-form-anchor-point-click-item"
          :class="packagesMainFormAnchorPointClickItemTitle(index)"
        >
          <span class="packages-main-form-anchor-point-click-item-text" @click="jumpAnchor(item)">{{ item.slotTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yulang-anchor-point',
  model: {
    prop: 'slotArr',
    event: 'slotArr',
  },
  props: {
    slotArr: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      // 锚点距离浏览器顶部的高度
      containerOffsetTop: null,
      // 父盒子的高度
      containerHeight: null,
      level1Index: 0,
      level2Index: 0,
      fontSizeLevel: {
        1: {
          fontsize: '2rem',
        },
        2: {
          fontsize: '1.5rem',
        },
        3: {
          fontsize: '1rem',
        },
      },
      isShowFade: true,
    };
  },
  computed: {
    slotArrComputed: {
      get() {
        return this.slotArr;
      },
      set(newValue) {
        this.$emit('slotArr', newValue);
      },
    },
    computedShowfade() {
      return [
        this.isShowFade ? 'yulang-fade-in-right' : 'yulang-fade-out-right',
      ];
    },
  },
  methods: {
    jumpAnchor(item) {
      document.querySelector('#' + item.slotName).scrollIntoView();
    },
    packagesMainFormAnchorPointClickItemTitle(index) {
      return {
        'packages-main-form-anchor-point-click-item-level1':
          this.slotArrComputed[index].level === 1,
        'packages-main-form-anchor-point-click-item-level2':
          this.slotArrComputed[index].level === 2,
      };
    },
    titleFontSize(item) {
      //根据标题等级给字体大小
      if (item.level === 1) return this.fontSizeLevel[item.level].fontsize;
      if (item.level === 2) return this.fontSizeLevel[item.level].fontsize;
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.containerOffsetTop = this.$refs.container.offsetTop;
      // 如果内容区域超过屏幕区域，拿屏幕高减去上方高度
      if (
        this.$refs.container.parentNode.offsetHeight >
        document.body.clientHeight - this.containerOffsetTop
      ) {
        this.containerHeight =
          document.body.clientHeight - this.containerOffsetTop;
      } else {
        this.containerHeight = this.$refs.container.parentNode.offsetHeight;
      }
    });
  },
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
