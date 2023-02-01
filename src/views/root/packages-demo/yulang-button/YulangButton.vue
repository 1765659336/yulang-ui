<template>
  <div>
    这是按钮页面
    <yulang-button @click="btn">不禁用按钮</yulang-button>
  </div>
</template>

<script>
export default {
  name:'packages-demo-yulang-button',
  methods:{
    btn(){
      console.log('object');
    }
  }
}
</script>

<style lang="less" scoped>

</style>