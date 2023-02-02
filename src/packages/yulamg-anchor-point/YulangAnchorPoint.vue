<template>
  <div
    class="packages-main-form-anchor-point-container"
    ref="container"
    :style="{
      '--offsetTop-container--': containerOffsetTop + 'px',
      '--container-father-height--': containerFatherHeight + 'px',
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
          v-for="item in slotArrComputed"
          :key="item.slotName"
          class="packages-main-form-anchor-point-click-item"
        >
          <span @click="jumpAnchor(item)">{{ item.slotTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "packages-yulang-anchor-point",
  model: {
    prop: "slotArr",
    event: "slotArr",
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
      // containerFatherHeight: null,
    };
  },
  computed: {
    slotArrComputed: {
      get() {
        return this.slotArr;
      },
      set(newValue) {
        this.$emit("slotArr", newValue);
      },
    },
  },
  methods: {
    jumpAnchor(item) {
      document.querySelector("#" + item.slotName).scrollIntoView();
    },
  },
  mounted() {
    this.$nextTick(function () {
      console.log([this.$refs.container.parentNode])
      this.containerOffsetTop = this.$refs.container.offsetTop;
      // this.containerFatherHeight = this.$refs.container.parentNode.offsetHeight;
    });
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
