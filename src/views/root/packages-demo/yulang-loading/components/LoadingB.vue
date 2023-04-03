<template>
  <div>
    <div class="test" id="yualangLoadingTest1">1</div>
    <div class="test" id="yualangLoadingTest2">2</div>
    <div class="test" v-YulangLoading="loading">3</div>
    <yulang-button @click="openTest1">开启1loading</yulang-button>
    <yulang-button @click="closeTest1">关闭1loading</yulang-button>
    <yulang-button @click="openTest2">开启2loading</yulang-button>
    <yulang-button @click="closeTest2">关闭2loading</yulang-button>
    <yulang-button @click="openTest3">开启3loading</yulang-button>
    <yulang-button @click="closeTest3">关闭3loading</yulang-button>
    <yulang-button @click="screen">开启全屏loading</yulang-button>
  </div>
</template>

<script>
let loadingObj1;
let loadingObj2;

export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    openTest1() {
      loadingObj1 && loadingObj1.close();
      loadingObj1 = this.$yulangLoading({
        target: "#yualangLoadingTest1",
      });
    },
    closeTest1() {
      loadingObj1 && loadingObj1.close();
    },
    openTest2() {
      loadingObj2 && loadingObj2.close();
      loadingObj2 = this.$yulangLoading({
        target: "#yualangLoadingTest2",
      });
    },
    closeTest2() {
      loadingObj2 && loadingObj2.close();
    },
    openTest3() {
      this.loading = true;
    },
    closeTest3() {
      this.loading = false;
    },
    screen() {
      const loadingObj = this.$yulangLoading();
      setTimeout(() => {
        loadingObj.close();
      }, 2000);
    },
  },
};
</script>

<style lang="less" scoped>
.test {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
}
</style>
