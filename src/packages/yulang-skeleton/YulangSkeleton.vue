<template>
  <div class="packages-yulang-skeleton" ref="yulangSkeletonContainer"></div>
</template>

<script>
export default {
  name: "yulang-skeleton",
  props: {
    // 父容器dom
    fatherDomSelect: {
      require: true,
    },
    skeletonArr: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      position: null,
    };
  },
  mounted() {
    const fatherDom = document.querySelector(this.fatherDomSelect);
    this.position = fatherDom.style.position;
    fatherDom.style.position = "relative";
    // 设置父盒子的大小
    this.$refs.yulangSkeletonContainer.style.height =
      fatherDom.clientHeight + "px";
    this.$refs.yulangSkeletonContainer.style.width =
      fatherDom.clientWidth + "px";
    this.skeletonArr.forEach((item) => {
      const dom = document.querySelector(item);
      const domCopy = document.createElement("div");
      //   获取子盒子距离父盒子的距离
      domCopy.style.top = dom.offsetTop + "px";
      domCopy.style.left = dom.offsetLeft + "px";
      //   获取子盒子的大小
      domCopy.style.height = dom.offsetHeight + "px";
      domCopy.style.width = dom.offsetWidth + "px";
      //   骨架屏的颜色
      domCopy.style.backgroundColor = "#f2f2f2";
      domCopy.style.borderRadius = dom.offsetHeight / 2 + "px";
      //   给生成的子盒子设置定位
      domCopy.style.position = "absolute";
      this.$refs.yulangSkeletonContainer.appendChild(domCopy);
    });
  },
  destroyed() {
    const fatherDom = document.querySelector(this.fatherDomSelect);
    fatherDom.style.position = this.position;
  },
};
</script>

<style lang="less" scoped>
@import url("./index.less");
</style>
