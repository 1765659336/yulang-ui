<template>
  <div>
    开关
    <yulang-switch v-model="value" @change="aa"></yulang-switch>
    <yulang-switch
      v-model="value2"
      inactive-color="#84adea"
      active-color="#2e2e2e"
    ></yulang-switch>
    <yulang-switch
      v-model="value3"
      active-text="按月付费"
      inactive-text="按年付费"
    ></yulang-switch>
    <yulang-switch v-model="value4" disabled></yulang-switch>
    <button @click="outerClick">外面点击</button>
  </div>
</template>

<script>
export default {
  name: 'packages-demo-yulang-switch',
  data() {
    return {
      value: true,
      value2: false,
      value3: true,
      value4: false,
    };
  },
  methods: {
    outerClick() {
      this.value = !this.value;
    },
    aa(val){
      console.log(val);
    }
  },
  watch: {
    // 下面这个监听只是为了打印显示
    // value(newValue) {
    //   console.log('value 值发生改变：', newValue);
    // },

  },
};
</script>

<style lang="less" scoped></style>
