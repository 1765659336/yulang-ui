export const codeStrB = `
<template>
  <div>
    <div class="skeleton-b-container" id="skeletonBContainer">
      <div class="item item1">爱国</div>
      <div class="item item2">进步</div>
      <div class="item item3">民主</div>
      <div class="item item4">科学</div>
      <div class="item item5">敬业</div>
      <yulang-skeleton
        v-if="isShowSkeleton"
        fatherDomSelect="#skeletonBContainer"
        :skeletonArr="[
          '.item1',
          '.item2',
          '.item3',
          '.item4',
          '.item5',
          '.item6',
        ]"
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
    border: 1px solid red;
  }
  .item1 {
    width: 500px;
    height: 25px;
  }

  .item2 {
    width: 400px;
    height: 25px;
  }

  .item3 {
    width: 300px;
    height: 25px;
  }

  .item4 {
    width: 200px;
    height: 50px;
  }

  .item5 {
    width: 600px;
    height: 50px;
  }
}
</style>
`

export const codeStrC = `
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
        :skeletonArr="[
          '.item11',
          '.item22',
          '.item33',
          '.item44',
          '.item55',
        ]"
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
    border: 1px solid red;
  }
  .item11 {
    width: 500px;
    height: 25px;
  }

  .item22 {
    width: 400px;
    height: 25px;
  }

  .item33 {
    width: 300px;
    height: 25px;
  }

  .item44 {
    width: 200px;
    height: 50px;
  }

  .item55 {
    width: 600px;
    height: 50px;
  }
}
</style>
`