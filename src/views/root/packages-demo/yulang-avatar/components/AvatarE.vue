<template>
  <div class="demo-fit">
    <div class="block" v-for="fit in fits" :key="fit">
      <span class="title">{{ fit }}</span>
      <yulang-avatar shape="square" :size="100" :fit="fit" :src="url"></yulang-avatar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>

<style lang="less" scoped>
.demo-fit {
  display: flex;

  .block {
    position: relative;
    margin-right: 10px;
    .title {
      position: absolute;
      top: 0;
      width: 100%;
      transform: translateY(-100%);
      text-align: center;
    }
  }
}
</style>
