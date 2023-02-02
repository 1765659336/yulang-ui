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
        <div class="packages-main-form-anchor-point-content-item-title">
          {{ item.slotTitle }}
        </div>
        <slot :name="[item.slotName]"> </slot>
      </div>
    </div>

    <div class="packages-main-form-anchor-point-click">
      <div id="packages-main-form-anchor-point-click">
        <div
          v-for="(item, index) in slotArrComputed"
          :key="item.slotName"
          class="packages-main-form-anchor-point-click-item"
          :class="packagesMainFormAnchorPointClickItemTitle(index)"
        >
          <span @click="jumpAnchor(item)">{{ item.slotTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'packages-yulang-anchor-point',
  model: {
    prop: 'slotArr',
    event: 'slotArr',
  },
  props: {
    slotArr: {
      type: Array,
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
