<template>
  <div>
    <div class="skeleton-b-container" id="skeletonBContainer2">
      <div class="item item11">爱国</div>
      <div class="item item22">进步</div>
      <div class="item item33">民主</div>
      <div class="item item44">科学</div>
      <div class="item item55">敬业</div>
      <yulang-skeleton
        v-if="isShowSkeleton"
        fatherDomSelect="#skeletonBContainer2"
        :skeletonArr="['.item11', '.item22', '.item33', '.item44', '.item55']"
        animated
      ></yulang-skeleton>
    </div>
    <yulang-button @click="isShowSkeleton = !isShowSkeleton">{{
      isShowSkeleton ? "隐藏" : "显示"
    }}</yulang-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowSkeleton: false,
    };
  },
};
</script>

<style lang="less" scoped>
.skeleton-b-container {
  width: 700px;
  height: 300px;
  background-color: skyblue;
  flex-wrap: wrap;

  .item {
    margin: 10px 0;
    border: 2px solid white;
    border-radius: 10px;
    text-align: center;
  }
  .item11 {
    width: 500px;
    height: 25px;
    line-height: 25px;
  }

  .item22 {
    width: 400px;
    height: 25px;
    line-height: 25px;
  }

  .item33 {
    width: 300px;
    height: 25px;
    line-height: 25px;
  }

  .item44 {
    width: 200px;
    height: 50px;
    line-height: 50px;
  }

  .item55 {
    width: 600px;
    height: 50px;
    line-height: 50px;
  }
}
</style>
